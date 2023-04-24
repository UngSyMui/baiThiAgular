const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.list = async (req,res)=>{
    try{
        const ls1 = await User.find({});
        res.render("user/list",{
            items: ls1
        })

    }catch (err){
        res.send(err);
    }
}
exports.createForm =(req,res)=>{
    res.render("user/create");
}
exports.save =  async (req,res)=>{
    let existUser = await User.findOne({email: req.body.email});
    if(existUser) res.status(422).send("Email is exist");
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt);
    const user = new User({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        tel: req.body.tel,
        username: req.body.username,
        password: hashPassword
    })
    user.save().then(rs=>res.redirect("user/list")).catch(err=>res.send(err));

}