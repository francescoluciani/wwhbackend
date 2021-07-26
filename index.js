const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const port = process.env.PORT || 5000;
const loginroute = require("./routes/loginroute");
const { userLogin } = require("./controller/userController");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const connection = require("./db/conf");
const transactions = require("./db/data");
const userModels = require("./models/userModels");

app.get("/", (req, res) => res.send("Hello from /"));
app.use("/auth", loginroute);

// app.get("/users", (req, res) => {
//   connection.query("SELECT * FROM user ", (err, results) => {
//     if (err) {
//       res.status(500).send("error retrieving data from db");
//     } else {
//       res.json(results);
//     }
//   });
// });

app.listen(port, (err) => {
  if (err) throw new Error(" something is not working");
  console.log(`Great, your server is running on port: ${port}`);
})