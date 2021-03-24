const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ["tarekul", "soma"];
app.get("/", (req, res) => {
  res.send("Thank you Tarekul calling me");
});
app.get("/fruit/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: 200 });
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const name = users[id];
  res.send({ id, name });
});

app.post("/addUser", (req, res) => {
  //save to data base
  const user = req.body;
  user.id = 55;
  res.send(user);
});
app.listen(3000, () => console.log("Listening on port 3000"));
