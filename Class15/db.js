const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

async function main() {
  await mongoose.connect(
    "mongodb+srv://rutvikbhuva:GDhKqzTacTP7eGZW@rutvikbhuvaa.wkved.mongodb.net/"
  );
}

main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
