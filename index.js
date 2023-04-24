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


app.use("/user",userRouter);






