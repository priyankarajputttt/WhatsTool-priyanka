const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")


//1
router.get("/uploadCSV", userController.uploadCSV)

//2
router.get("/greeting", userController.greetUser )


module.exports = router;

