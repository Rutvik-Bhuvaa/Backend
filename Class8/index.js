const express = require("express");

const app = express();

app.use(express.json());

const BookStore = [
  {
    id: 1,
    name: "Nexus",
    author: "rohit",
  },
];

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
