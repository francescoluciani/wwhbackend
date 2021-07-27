const mysql = Noderequire("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

   module.exports = pool; 


//mysql://b5773e640953d0:900d0f66@us-cdbr-east-04.cleardb.com/heroku_c89e4ed71ee48dc?reconnect=true




