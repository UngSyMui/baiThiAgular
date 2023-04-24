const express = require("express");
require("dotenv").config();

const database = require("./src/database");
// const Student = require("./src/models/student");
const studentRouter = require("./src/routes/student.route");
const subjectRouter = require("./src/routes/subject.route");
const authRouter = require("./src/routes/auth.route");
const teacherRouter = require("./src/routes/teacher.route");
const app = express();

const PORT = process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log("Server is running...");
})


app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//start session
const session = require("express-session");
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: "t2203e",
    cookie:{
        maxAge: 6000,//miliseconds
        // secure: true
    }
}))

app.use("/students",studentRouter);
app.use("/subjects",subjectRouter);
app.use("/auths",authRouter);
app.use("/teachers",teacherRouter);


//connect mongodb



app.get("/",function (req,res){
    // res.send("T2203E");
    let student ={
        name:"Nguyen Van An",
        age: 19
    };
    let classroom ={
        name: "T2203E",
        room: "B14"
    }
    res.render("home",{
        abc: student,
        classroom: classroom
    });
});




app.get("/classrooms",(req,res)=>{
    const Classroom = require("./src/models/classroom");

    Classroom.find({}).then(rs=>{
        res.render("classroom/classrooms",{
            items:rs
        });
    }).catch(err=>{
        res.send(err);
    });
})
app.get("/create-classroom",(req,res)=>{
    res.render("classroom/createclassroom")

})
app.post("/create-classroom",(req,res)=>{
    const Classroom = require("./src/models/classroom");
    let c = req.body;
    let newClassroom = new Classroom(c);
    newClassroom.save().then(rs=>{
        res.redirect("/classrooms");
    }).catch(err=>{
        res.send(err);
    })

})

app.get("/edit-classroom/:id",(req,res)=>{
    const Classroom = require("./src/models/classroom");
    let id= req.params.id;
    Classroom.findById(id).then(rs=>{
        res.render("classroom/edit",{
            data:rs
        })
    }).catch(err=>{
        res.send(err);
    })

})

app.post("/edit-classroom/:id",(req,res)=>{
    const Classroom = require("./src/models/classroom");
    let id= req.params.id;
    let data = req.body;
    Classroom.findByIdAndUpdate(id,data).then(rs=>{
        res.redirect("/classrooms");
    }).catch(err=>{
        res.send(err);
    })
})

app.post("/delete-classroom/:id",(req,res)=>{
    const Classroom = require("./src/models/classroom");
    let id = req.params.id;
    Classroom.findByIdAndDelete(id).then(rs=>{
        res.redirect("/classrooms");
    }).catch(err=>{
        res.send(err);
    })

})



app.get("/listmember",(req,res)=>{
    const Member = require("./src/models/member");
    Member.find({}).then(rs=>{
        res.render("member/listmember",{
            items:rs
        })
    }).catch(err=>{
        res.send(err)
    })
})
app.get("/create-member",(req,res)=>{
    res.render("member/createmember");
})
app.post("/create-member",(req,res)=>{
    const Member = require("./src/models/member");
    let m = req.body;
    let newMember = new Member(m);
    newMember.save().then(rs=>{
        res.redirect("/listmember");
    }).catch(err=>{
        res.send(err)
    })

})
app.get("/edit-member/:id",(req,res)=>{
    let id= req.params.id;
    const Member = require('./src/models/member');
    Member.findById(id).then(rs=>{
        res.render("member/edit",{
            data:rs
        })
    }).catch(err=>{
        res.send(err)
    })
})
app.post("/edit-member/:id",(req,res)=>{
    let id = req.params.id;
    let m = req.body;
    const Member = require("./src/models/member");
    Member.findByIdAndUpdate(id,m).then(rs=>{
        res.redirect("/listmember");
    }).catch(err=>{
        res.send(err)
    })
})
app.post("/delete-member/:id",(req,res)=>{
    const Member = require("./src/models/member");
    let id = req.params.id;
    Member.findByIdAndDelete(id).then(rs=>res.redirect("/listmember")).catch(err=>res.send(err));
})


