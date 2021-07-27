const userModels = require("../models/userModels");
const data = require("../db/data");
const bcrypt = require("bcrypt");

const userLogin = async (req, res, next) => {
  const userName = req.body.username;
  userModels.userLogin(userName, async (err, results) => {
    if (err) {
      res.status(500).send("we could not find your username");
    } else {
      const validPass = await bcrypt.compare(
        req.body.password,
        results[0].password
      );
      if (!validPass) {
        res.send(err);
      } else {
        req.userInfo = results[0];

        next();
      }
    }
  });
};

const sendUserInfo = (req, res, next) => {
  const userData = data.filter((user) => user.id == req.userInfo.id);
  console.log(userData);
  res.json(userData);
};

module.exports = { userLogin, sendUserInfo };
