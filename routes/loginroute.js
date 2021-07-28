const express = require("express");
const router = express.Router();

const {
  userLogin,

  sendUserInfo, userSql
} = require("../controller/userController");

router.post("/login", userLogin, sendUserInfo);


module.exports = router;


