const mongoose = require("mongoose");
const menu= new mongoose.Schema({
  productName: String,
  price: Number,
  imageTitle: String,
});

module.exports = mongoose.model("menu", menu);
