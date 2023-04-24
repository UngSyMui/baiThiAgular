const express = require("express");
require("dotenv").config();

const database = require("./src/database");
// const Student = require("./src/models/student");

const userRouter = require("./src/routes/user.route");

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

app.use("/user",userRouter);



//connect mongodb



