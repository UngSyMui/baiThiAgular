let mongoose = require("mongoose");

let student = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        minLength:[6,'Ten phai co do dai toi thieu la 6'],
        maxLength:255
    },
    email: {
        type:String,
        required: true,
        unique: [true,"Email vua nhap da ton tai"],
        minLength:1,
        maxLength:255,
        // validate:{
        //     validator: (v)=>{
        //
        //     },
        //     message:(t)=>`${t.value} khong phai email`
        // }
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:100
    },
    tel:
        {
        type: String,
        required: true,
        validate:{
            validator: (v)=>{
                return v.startsWith('0');
            },
            message:t=>`${t.value} khong phai la so dien thoai`
        }
    },
    avatar: String // /uploads/...
})

module.exports = mongoose.model("Student",student);
