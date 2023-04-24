
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const session = require("express-session");
const config_mail = {
    service:"Gmail",
    host:"smtp.gmail.com",
    port:587,
    auth:{
        user:"ungsymui@gmail.com",
        pass:"trijklijwqtrdvst"
    }
};
const transport = nodemailer.createTransport(config_mail);


exports.register = (req,res)=>{
    res.render("auth/register");
}

exports.create = async (req,res)=>{
    //Kiem tra email da co hay chua
    let existUser = await User.findOne({email: req.body.email});
    if(existUser) res.status(422).send("Email is exist");
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    const file = req.file;

    //Save to database
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
    })
    if(file)
        user.avatar = "/uploads/user/"+file.filename;
    user.save().then(rs=>res.send("done")).catch(err=>res.send(err));
}

exports.login = (req,res)=>{
    res.render("auth/login");
}

exports.loginUser = async (req,res)=>{
    let existUser = await User.findOne({email: req.body.email});
    if(!existUser) return res.status(401).send("Email or password is not correct");
    const checkPassword = await bcrypt.compare(req.body.password,existUser.password);
    if(!checkPassword) return res.status(401).send("Email or password is not correct");
    req.session.auth = {
        _id: existUser._id,
        name: existUser.name,
        email:existUser.email,
        permissions: existUser.permissions,
    }

    res.redirect("/students/liststudent");
}

exports.getinfo = (req,res)=>{
    res.render("auth/info")
}

exports.info = async (req,res)=>{
    let existUser = await User.findOne({email: req.body.email});
    if(!existUser) return res.status(401).send("Email or password is not correct");
    const checkPassword = await bcrypt.compare(req.body.password,existUser.password);
    if(!checkPassword) return res.status(401).send("Email or password is not correct");
    req.session.auth = {
        _id: existUser._id,
        name: existUser.name,
        email:existUser.email,
        permissions:["student","classroom","subject"],
    }
    res.render("auth/editpass",{
        auth: req.session.auth
    });
}
exports.updatepass = async (req,res)=>{
    let id = req.params.id;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    User.findByIdAndUpdate(id, {
        password: hashPassword
    }).then(rs=>{
        res.send("Update success!");
    }).catch(err=>{
        res.send(err);
    })
}

exports.changePassForm = (req,res)=>{
    res.render("/auth/changePasswordForm");
}
exports.updatePass = async (req,res)=>{
    if(req.body.new_password !== req.body.confirm_password){
        return res.redirect("/auths/changePasswordForm");
    }
    const current_password = req.body.current_password;
    const auth = req.session.auth;
    let existUser = await User.findById(auth._id);
    if(!existUser){
        req.session.auth = null;
        return res.redirect("/auths/login");
    }
    const checkPassword = await bcrypt.compare(current_password,existUser.password);
    if(!checkPassword) return res.redirect("/auths/change-password");
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.new_password,salt);
    User.findByIdAndUpdate(auth._id,{
        password: hashPassword
    }).then(rs=>{
        req.session.auth = null;
        res.redirect("/auths/login")
    }).catch(err=>{
        res.status(401).send("Error");
    })

}
exports.change = (req,res)=>{
    res.render("auth/change");
}
exports.postchange = async (req,res)=>{

    try{
        if(User.findOne({email: req.body.email})){
            let link = "localhost:3000/auths/formchange/"+Date.now();

            await transport.sendMail({
                from:"Demo Node JS 2203E",
                to: req.body.email,
                cc:"",
                subject:"Test Send Mail Function",
                html: link
            });
            res.send("Success!")
        }


    }catch (err){
        res.send(err);
    }
}

exports.forgotPassword = async (req,res)=>{
    const email = req.body.email;
    const existUser = User.findOne({email: email});
    if(!existUser) return res.status(422).send("Email not found");
    const code = Date.now()+existUser._id+Date.now();
    req.session.resetPassword = {
        code: code,
        user_id: existUser._id
    }
    const link = `http://localhost:3000/auth/reset-password?code=${code}`;
    transport.sendMail({
        from:'Demo NodeJS T2203E',
        to: existUser.email,
        cc: '',
        subject:"Test Send Mail function",
        html: `<p>Click <a href="${link}">here</a> to reset password</p>`
    });

    res.send("done");
}

exports.resetPasswordForm = (req,res)=>{
    const code = req.query.code;
    const code_session = req.session.resetPassword.code;
    if(code != code_session) return res.status(404).send("404 not found");
    res.send("update pass...");

}

