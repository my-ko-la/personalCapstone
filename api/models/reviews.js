const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
});

module.exports = mongoose.model("Reviews", reviewSchema);
