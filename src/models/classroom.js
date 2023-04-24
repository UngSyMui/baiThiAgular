let moongose = require("mongoose");
let classroom = new moongose.Schema({
    name:String,
    room:String
})
module.exports = moongose.model("Classroom",classroom);