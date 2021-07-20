const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const loginroute = require("./routes/loginroute");
const { userLogin } = require("./controller/userController");

const transactions = require("./db/data");
const userModels = require("./models/userModels");
const connection = require("./db/conf");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/auth", loginroute);

app.get("/", (req, res) => res.send("Hello from /"));

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM user ", (err, results) => {
    if (err) {
      res.status(500).send("error retrieving data from db");
    } else {
      res.json(results);
    }
  });
});

app.listen(port, (err) => {
  if (err) throw new Error(" something is not working");
  console.log(`Great, your server is running on port: ${port}`);
});

//     `INSERT INTO user (username, password) VALUES (?, ?) `,
//     [req.body.username, hashedPassword],
//     (err, results, fields) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(201).send(results);
//       }
//     }
//   );
// });

// const login = (req, res, next) => {
//   console.log("login", req.body);

//   connection.query(
//     `SELECT * FROM user WHERE username= ?`,
//     [req.body.username],

//     (err, results) => {
//       if (err) {
//         res.status(500).send("we could not find your username");
//       } else {
//         req.myName = "user";
//         res.send(results);
// next();
//       }
//     }
//   );
// };

// app.post("/login", (req, res, next) => {
//   const{ username , password } = req.body;
//   if ( user === userName && password === hashedPassword )
//   res.status(200).cookie("login", true, { httpOnly: true }).json({ message: "welcome" });
// });
// const authentication = (req, res, next) => {
//   if (req.cookies.login === "true") {
//     console.log("user is logged in ");
//     next();
//   } else {
//     res.status(401).json({ message : "wrong credentials"});
//   }
// };

// app.get("/secret", authentication, (req, res, next) => {
//   res.send("welcome to the secret route");
// });
// app.post("/login", login, (req, res, next) => {
//   //user id will come from middleware
//   const userId = 1;
//   const selectedUser = transactions.filter((user) => user.id === userId);
//   //check if user successefull send all info of that user (app.post by id )
//   console.log(selectedUser);
// });
