const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const loginroute = require("./routes/loginroute");
const connection = require("./db/conf");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/", (req, res) => res.send("Hello from /"));
app.use("/auth", loginroute);

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM user ", (err, results) => {
    if (err) {
      res.status(500).send("error retrieving data from db");
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, (err) => {
  if (err) throw new Error("something is not working");
  console.log(`Great, your server is running on port: ${PORT}`);
})