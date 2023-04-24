let moongose = require("mongoose");
let subject = new moongose.Schema({
    name: {
        type:String,
        required:true,
        minLength:[2,"Ten mon hoc phai it nhat 2 ky tu"],
        maxLength:255,
    },
    time: {
        type:Number,
        required:true,
        min:[10,"So gio phai it nhat 10"],

    },
    teacher:{
        name: {
            type:String,
            required:true,
            minLength:[2,"Ten giao vien phai it nhat 2 ky tu"],
            maxLength:255,
        },
        email: {
            type:String,
            required:true,

        },
        tel: {
            type:String,
            required:true,
            validate:{
                validator: (v)=>{
                    return v.startsWith('0');
                },
                message:t=>`${t.value} khong phai la so dien thoai`
            }
        }
    }

})
module.exports = moongose.model("Subject",subject);
