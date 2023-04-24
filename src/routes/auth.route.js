const express = require("express");
let router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,"public/uploads/user");
    },
    filename: function (req,file,cb){
        cb(null,Date.now()+"-"+file.originalname);
    }
});
const upload = multer({storage:storage});

const controller = require("../controllers/auth.controller");
const middleware = require("../middlewares/auth.middleware");
const {startSession} = require("mongoose");

router.use("register",middleware.guest);
router.use("login",middleware.guest);
router.use("/change-password",middleware.logged_in);


router.get("/register",controller.register);
router.post("/register",upload.single("avatar"),controller.create);
router.get("/login",controller.login);
router.post("/login",controller.loginUser);
router.get("/info",controller.getinfo);
router.post("/info",controller.info);
router.post("/editpass/:id",controller.updatepass);

router.get("/change-password",controller.changePassForm);
router.post("/change-password",controller.updatePass);
router.get("/change",controller.change);
// router.post("/change",controller.postchange);
router.post("/change",controller.forgotPassword);
router.get("/reset-Password",controller.resetPasswordForm);

module.exports = router;