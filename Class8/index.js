const express = require("express");

const app = express();

app.use(express.json());

app.use("/user", (req, res) => {
  // here this is not persistant connection so it gives the error because it is a TCP connection
  console.log("Hi there");
  res.send("How are you?");
  console.log("Kaise ho");
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
