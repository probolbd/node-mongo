const express = require("express");

const app = express();
const users = ["tarekul", "soma"];
app.get("/", (req, res) => {
  res.send("Thank you Tarekul calling me");
});
app.get("/fruit/banana", (req, res) => {
  res.send({ fruit: "banana", quantity: 200 });
});
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const name = users[userId];
  res.send(name);
});
app.listen(3000, () => console.log("Listening on port 3000"));
