const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});
app.get("/post/:id", (req, res) => {
  console.log(req);
  res.send("");
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
