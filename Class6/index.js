const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("you are on home page");
});

app.listen(5000, () => {
  console.log("you are listening on port 5000");
});
