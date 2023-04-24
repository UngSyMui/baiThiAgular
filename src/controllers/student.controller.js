const Student = require("../models/student");
const nodemailer = require("nodemailer");
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

        const auth = req.session.auth;
        const ls1 = await Student.find({});
        res.render("liststudent",{
            items: ls1,
            auth: auth
        })

    }catch(err){

        res.send(err);

    }


}
exports.createForm = (req,res)=>{
    res.render("student/createstudent",{
    })
}

exports.save = async (req,res)=>{
    let s = req.body;
    // console.log(req); return res.send("done");
    const file = req.file;
    if(file)
    s.avatar = "/uploads/student/"+file.filename;
    let newStudent = new Student(s);
    try{
        await newStudent.save();
        //send email
        await transport.sendMail({
            from:"Demo Node JS 2203E",
            to:"ungsymui@gmail.com",
            cc:"",
            subject:"Test Send Mail Function",
            html:"<p>Meo meo meo meo </p>"
        });

        //end
        res.redirect("/students/liststudent");

    }catch (err){
        res.send(err);
    }

}

exports.editForm = (req,res)=>{
    let id= req.params.id;
    Student.findById(id).then(rs=>{
        res.render("student/edit",{
            data: rs
        });
    }).catch(err=>{
        res.send(err);
    })
}

exports.update =(req,res)=>{
    let id = req.params.id;
    let data = req.body;
    Student.findByIdAndUpdate(id,data).then(rs=>{
        res.redirect("/students/liststudent")
    }).catch(err=>{
        res.send(err);
    })
}

exports.delete = (req,res)=>{
    let id= req.params.id;
    Student.findByIdAndDelete(id).then(rs=>{
        res.redirect("/students/liststudent")
    }).catch(err=>{
        res.send(err);
    })
}
