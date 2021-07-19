const connection = require("../db/conf");
const userModels = {};

userModels.userLogin = (username, callback) => {
  connection.query(
    `SELECT * FROM user WHERE username= ?`,
    [username],
    (err, results) => {
      callback(err, results);
    }
  );
};
// userModels.userPassword = (password, callback) => {
//   connection.query(
//     `SELECT * FROM user WHERE password= ?`,
//     [password],
//     (err, results) => {
//       callback(err, results);
//     }
//   );
// };

module.exports = userModels;
