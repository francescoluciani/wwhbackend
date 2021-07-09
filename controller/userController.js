const connection = require("../db/conf");
const userModels = require("../models/userModels");

const userLogin = (req, res, next) => {
  const userName = req.body.username;
  userModels.userLogin(userName, (err, results) => {
    if (err) {
      res.status(500).send("we could not find your username");
    } else {
      req.myName = "user";
      res.send(results);
      next();
    }
  });
};
module.exports = { userLogin };
