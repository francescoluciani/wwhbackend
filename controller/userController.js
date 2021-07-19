const connection = require("../db/conf");
const userModels = require("../models/userModels");
const data = require("../db/data");

const userLogin = (req, res, next) => {
  const userName = req.body.username;
  console.log("ciao", req.body);
  userModels.userLogin(userName, (err, results) => {
    if (err) {
      res.status(500).send("we could not find your username");
    } else {
      req.userInfo = results[0];

      next();
    }
  });
};

// const userPassword = (req, res, next) => {
//   const userPass = req.body.password;
//   userModels.userPassword(userPass, (err, results) => {
//     if (err) {
//       res.status(500).send("we could not find your password");
//     } else {
//       req.userInfo = results[0];

//       next();
//     }
//   });
// };

const sendUserInfo = (req, res, next) => {
  const userData = data.filter((user) => user.id == req.userInfo.id);
  res.json(userData);
};

module.exports = { userLogin, sendUserInfo };
