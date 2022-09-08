const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: {
    amount: Number,
    currency: { type: String, enum: ["USD", "EUR"] },
  },
  description: String,
  productImage: { type: String, required: true },
  dimensions: {
    height: Number,
    width: Number,
    depth: Number,
  },
  isInStock: { type: Boolean, required: true },
  isOnSale: { type: Boolean, required: true },
  showcased: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
