const Subject = require("../models/subject");

exports.get = (req,res)=>{
    Subject.find({}).then(rs=>{
        res.render("subject/listsubject",{
            items:rs
        });
    }).catch(err=>{
        res.send(err);
    })
}
exports.createForm = (req,res)=>{
  res.render("subject/createsubject");
}

exports.save = (req,res)=>{
    let s = req.body;
    let newSubject = new Subject(s);
    newSubject.save().then(rs=>{
        res.redirect("/subjects/listsubject");
    }).catch(err=>{
        res.send(err);
    })
}
