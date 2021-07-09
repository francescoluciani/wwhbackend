const express = require("express");
const router = express.Router();
const connection = require("../db/conf");

const { userLogin } = require("../controller/userController");

router.post("/login", userLogin);

module.exports = router;
