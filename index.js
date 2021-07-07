const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const port = process.env.PORT || 5000;

/*app.use(express.urlencoded({ extended: false }));*/
app.use(express.json());

const connection = require("./conf");
const transactions = [
  {
    id: 1,
    spendings: [
      {
        label: "Travels",
        value: 353.32,
      },
      {
        label: "Groceries",
        value: 412.45,
      },

      {
        label: "Insurance",
        value: 202.32,
      },
      {
        label: "Home",
        value: 202.32,
      },
      {
        label: "Rent",
        value: 800.55,
      },
      {
        label: "Kids",
        value: 602.34,
      },
    ],
  },
  {
    id: 2,
    spendings: [
      {
        label: "ATravels",
        value: 10353.32,
      },
      {
        label: "AGroceries",
        value: 10412.45,
      },

      {
        label: "AInsurance",
        value: 10202.32,
      },
      {
        label: "AHome",
        value: 10202.32,
      },
      {
        label: "ARent",
        value: 10800.55,
      },
      {
        label: "AKids",
        value: 10602.34,
      },
    ],
  },
];

app.get("/", (req, res) => {
  connection.query(`SELECT * FROM user`, (err, results, fields) => {
    res.send(results);
  });
});

app.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  connection.query(
    `INSERT INTO user (username, password) VALUES (?, ?) `,
    [req.body.username, hashedPassword],
    (err, results, fields) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(results);
      }
    }
  );
});

const login = (req, res, next) => {
  console.log("login", req.body);

  connection.query(
    `SELECT * FROM user WHERE username= ?`,
    [req.body.username],

    (err, results) => {
      if (err) {
        res.status(500).send("we could not find your username");
      } else {
        req.myName = "user";
        /*res.send(results);*/
        next();
      }
    }
  );
};
app.post("/login", login, (req, res, next) => {
  //user id will come from middleware
  const userId = 1;
  const selectedUser = transactions.filter((user) => (user.id === userId));
  //check if user successefull send all info of that user (app.post by id )
  console.log(selectedUser);

});

//send results to the next middleware,
//access id
app.listen(port, (err) => {
  if (err) throw new Error("ups something is not working");
  console.log(`Great, your server is running on port: ${port}`);
});
