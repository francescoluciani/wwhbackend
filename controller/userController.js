const connection = require("../db/conf");
const userModels = require("../models/userModels");
const data = require("../db/data");
const userLogin = (req, res, next) => {
  const userName = req.body.username;
  userModels.userLogin(userName, (err, results) => {
    if (err) {
      res.status(500).send("we could not find your username");
    } else {
      req.userInfo = results[0];
      next();
    }
  });
};

const sendUserInfo = (req, res, next) => {
  const userData = data.filter((user) => user.id == req.userInfo.id);
  if (userData) {
    res.json(userData);
  } else {
    res.status(500).json({ message: "error retrieving user data" });
  }
};
module.exports = { userLogin, sendUserInfo };
