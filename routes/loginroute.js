const express = require("express");
const router = express.Router();
const connection = require("../db/conf");

const {
  userLogin,

  sendUserInfo,
} = require("../controller/userController");

router.post("/login", userLogin, sendUserInfo);

module.exports = router;
