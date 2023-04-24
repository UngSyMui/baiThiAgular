const permission ="student";
const express = require("express");
const multer = require("multer");
//Chon thu muc muon luu anh
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"public/uploads/student");
    },
    filename: function (req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
})
const upload = multer({storage:storage});
let router = express.Router();
const studentController = require("../controllers/student.controller");
const middleware = require("../middlewares/student.middleware");

// router.use(middleware.can_view);


router.get("/liststudent",studentController.get);

router.get("/create",studentController.createForm);

router.post("/create",upload.single("avatar"),studentController.save);

router.get("/edit-student/:id",studentController.editForm);

router.post("/edit-student/:id",upload.array("images"),studentController.update);
router.post("/delete-student/:id",studentController.delete);

module.exports = router;