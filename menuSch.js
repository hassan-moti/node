const mongoose = require("mongoose");
const menuSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  imageTitle: String,
});

module.exports = mongoose.model("menu", menuSchema);
