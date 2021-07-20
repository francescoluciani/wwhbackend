const mysql = require("mysql2");

const connection = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "Isa304380!",
  database: "registration",
});

module.exports = connection;

//mysql://b5773e640953d0:900d0f66@us-cdbr-east-04.cleardb.com/heroku_c89e4ed71ee48dc?reconnect=true

