const express = require("express");
const Auth = require("./middleware/auth");
const app = express();

// Database
const FoodMenu = [
  // Veg Items
  { id: 1, food: "Chowmein", category: "veg", price: 120 },
  { id: 2, food: "Butter Naan", category: "veg", price: 40 },
  { id: 3, food: "Momo", category: "veg", price: 90 },
  { id: 4, food: "Chai", category: "veg", price: 20 },
  { id: 5, food: "Rajma", category: "veg", price: 150 },
  { id: 6, food: "Roti", category: "veg", price: 15 },
  { id: 7, food: "Paneer Tikka", category: "veg", price: 220 },
  { id: 8, food: "Veg Biryani", category: "veg", price: 180 },
  { id: 9, food: "Dosa", category: "veg", price: 90 },
  { id: 10, food: "Idli", category: "veg", price: 60 },
  { id: 11, food: "Veg Burger", category: "veg", price: 120 },
  { id: 12, food: "Aloo Paratha", category: "veg", price: 50 },
  { id: 13, food: "Spring Roll", category: "veg", price: 100 },

  // Non-Veg Items
  { id: 14, food: "Chicken", category: "non-veg", price: 250 },
  { id: 15, food: "Mutton", category: "non-veg", price: 350 },
  { id: 16, food: "Egg Curry", category: "non-veg", price: 130 },
  { id: 17, food: "Fish Fry", category: "non-veg", price: 200 },
  { id: 18, food: "Chicken Biryani", category: "non-veg", price: 300 },
  { id: 19, food: "Prawn Curry", category: "non-veg", price: 400 },
  { id: 20, food: "Chicken Tikka", category: "non-veg", price: 280 },
  { id: 21, food: "Mutton Korma", category: "non-veg", price: 350 },
  { id: 22, food: "Fish Curry", category: "non-veg", price: 250 },
  { id: 23, food: "Butter Chicken", category: "non-veg", price: 320 },
  { id: 24, food: "Egg Bhurji", category: "non-veg", price: 80 },
  { id: 25, food: "Chicken Lollipop", category: "non-veg", price: 180 },
];

const AddToCart = [];

app.use(express.json());

app.get("/food", (req, res) => {
  res.status(200).send(FoodMenu);
});

app.use("/admin", Auth);

app.post("/admin", (req, res) => {
  FoodMenu.push(req.body);
  res.status(201).send("Items added successfully");
});

app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = FoodMenu.findIndex((item) => item.id === id);

  if (index === -1) {
    res.send("Item doesn't exist");
  } else {
    FoodMenu.splice(index, 1);
    res.send("Item deleted successfully");
  }
});

app.patch("/admin", (req, res) => {
  const id = req.body.id;
  const index = FoodMenu.findIndex((item) => item.id === id);
  if (index !== -1) {
    if (req.body.food) FoodMenu[index].food = req.body.food;
    if (req.body.category) FoodMenu[index].category = req.body.category;
    if (req.body.price) FoodMenu[index].price = req.body.price;
    res.send("Item changed successfully");
  } else {
    res.send("Item doesn't exist");
  }
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
