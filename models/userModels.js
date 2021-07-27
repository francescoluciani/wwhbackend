const pool = require("../db/conf");
const userModels = {};

userModels.userLogin = (username, callback) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
 
    connection.query(
      `SELECT * FROM user WHERE username= ?`,
      [username],
      (err, results) => {
        if (err) throw err;
        callback(err, results);
        connection.release();
      }
    ); 
  })
};

userModels.userSql = (user, callback) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
  })
  connection.query(
     `SELECT * FROM user`, (err, results) => {
          if (err) {
            res.status(500).send("error retrieving data from db");
          } else {
            res.json(results);
          }
        });
};

module.exports = userModels;
