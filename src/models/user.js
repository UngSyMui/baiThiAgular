const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:6,
        maxLength:255
    },
    email:{
        type:String,
        require:true,
        minLength: 6,
        maxLength: 255,
        unique:true
    },
    password:{
        type:String,
        require:true,
        minLength: 6,
        maxLength: 255
    },
    permissions: Array,
    avatar: String
})
module.exports = mongoose.model("User",userSchema);
