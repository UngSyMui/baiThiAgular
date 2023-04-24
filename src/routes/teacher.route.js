const permission = "teacher";
const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"public/uploads/teacher");
    },
    filename: function (req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})
const upload = multer({storage:storage});
let router = express.Router();
const teacherController = require("../controllers/teacher.controller");
const middleware = require("../middlewares/teacher.middleware");
router.get("/list",teacherController.get);
router.get("/create",teacherController.formCreate);
router.post("/create",upload.single("avatar"),teacherController.save);
router.get("/edit/:id",teacherController.getEdit);
router.post("/edit/:id",teacherController.update);
router.post("/delete/:id",teacherController.delete);
module.exports = router;
