const express = require("express");
const router = express.Router();

//import the controller function
const helloController = require("../controller/first");

router.get("/", helloController.SayHello);
router.get("/hii", helloController.SayHii);

module.exports = router;
