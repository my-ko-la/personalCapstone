const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewsSchema = require("./reviews");

const monitorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  inStock: Boolean,
  dimensions: {
    height: Number,
    width: Number,
    depth: Number,
  },
  category: {
    type: String,
    enum: ["gaming", "office"],
  },
  price: Number,
  brand: {
    type: String,
    enum: ["Acer", "HP", "Samsung"],
  },
  rating: Number,
  reviews: [reviewsSchema],
  onSale: Boolean,
});

module.exports = mongoose("Monitor", monitorSchema);
