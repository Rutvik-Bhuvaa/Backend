const express = require("express");

const app = express();

const bookStore = [
  { id: 1, name: "Harry Potter", author: "DevFlux" },
  { id: 2, name: "Friends", author: "Vikas" },
  { id: 3, name: "Nexus", author: "Rohit" },
];

app.use(express.json());

app.get("/book", (req, res) => {
  res.send(bookStore);
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = bookStore.find((info) => info.id === id);
  res.send(book);
});

app.post("/book", (req, res) => {
  bookStore.push(req.body);
  res.send("Data saved successfully");
});

app.listen(3000, () => {
  console.log("I am listening on port 3000");
});
