const express = require("express");
let router = express.Router();
let subjectController = require("../controllers/subject.controller");
router.get("/listsubject",subjectController.get);

router.get("/create",subjectController.createForm);

router.post("/create",subjectController.save);
//
// router.get("/edit-subject/:id",subjectController.editForm);
//
// router.post("/edit-subject/:id",subjectController.update);
// router.post("/delete-subject/:id",subjectController.delete);
module.exports = router;