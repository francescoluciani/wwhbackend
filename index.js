const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const loginroute = require("./routes/loginroute");
const cors = require("cors");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


//app.get("/", (req, res) => res.send("Hello from /"));
app.use("/auth", loginroute);
app.use("/users");

app.listen(PORT, (err) => {
  if (err) throw new Error("something is not working");
  console.log(`Great, your server is running on port: ${PORT}`);
})