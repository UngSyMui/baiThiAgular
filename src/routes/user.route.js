const express = require("express");
let router = express.Router();

const controller = require("../controllers/user.controller");
router.get("/list",controller.list);
router.get("/create",controller.createForm);
router.post("/create",controller.save);

module.exports = router;
