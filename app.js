const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const tasks = require("./tasks");
const users = require("./users");
const user = require("./user");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/tasks", tasks);
app.use("/users", users);
app.use("/user", user);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server Started");
});
