const Teacher = require("../models/teacher");
const nodemailer = require("nodemailer");
const Student = require("../models/student");
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

exports.get = async (req,res)=>{
    try{
        const ls1 = await Teacher.find({});
        res.render("teacher/list",{
            items: ls1
        })
    }catch(err){
        res.send(err);
    }
}
exports.formCreate = (req,res)=>{
    res.render("teacher/create");
}
exports.save = async (req,res)=>{
    let s = req.body;
    const file = req.file;
    if(file){
        s.avatar = "/uploads/teacher/"+file.filename;
    }
    let newTeacher = new Teacher(s);
    try{
        await newTeacher.save();

        await transport.sendMail({
            from:"Demo Node JS 2203E",
            to: newTeacher.email,
            cc:"",
            subject:"Test Send Mail Function",
            html:"<p>Meo meo meo meo </p>"

         });
        res.redirect("/teachers/list");
    }
    catch(err){
        res.send(err);
    }

    }
exports.getEdit =(req,res)=>{
    let id = req.params.id;
    Teacher.findById(id).then(rs=>{
        res.render("teacher/edit",{
            data:rs
        })
    }).catch(err=>{
        res.send(err)
    });
}
exports.update =(req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Teacher.findByIdAndUpdate(id,data).then(rs=>{
        res.redirect("/teachers/list")
    }).catch(err=>{
        res.send(err);
    })

}
exports.delete = (req,res)=>{
    let id = req.params.id;
    Teacher.findByIdAndDelete(id).then(rs=>res.redirect("/teachers/list")).catch(err=>res.send(err));
}
