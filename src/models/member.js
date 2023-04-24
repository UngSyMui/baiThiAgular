let moongose = require("mongoose");
let member = new moongose.Schema({
    name:String,
    age:Number,
    address:String
});
module.exports = moongose.model("Member",member);
