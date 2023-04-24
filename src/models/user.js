const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true,
        minLength:3,
        maxLength:255
    },
    lastname:{
        type:String,
        require:true,
        minLength:3,
        maxLength:255
    },
    tel: String,
    username:{
        type:String,
        require:true,
        minLength:3,
        maxLength:255
    },
    password:{
        type:String,
        require:true,
        minLength: 6,
        maxLength: 255
    }
})
module.exports = mongoose.model("User",userSchema);
