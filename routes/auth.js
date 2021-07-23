const express = require("express");
const router = express.Router();
const { loginValidation } = require("../routes/validation");
const connection = require("../db/conf");
const bcrypt = require("bcryptjs");

module.exports = router;