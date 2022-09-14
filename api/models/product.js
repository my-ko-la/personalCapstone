const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: {
    amount: Number,
    currency: { type: String, enum: ["USD", "EUR"] },
  },
  description: [
    {
      property: String,
      propertyDescription: String,
    },
  ],
  productImage: { type: String, required: true },
  isInStock: { type: Boolean, required: true },
  isOnSale: { type: Boolean, required: true },
  ratingAndReviews: [
    {
      rating: {
        type: Number || String,
        min: 1,
        max: 5,
        default: "No rating yet",
      },
      reviews: [
        {
          type: String,
          default: "No reviews yet",
        },
      ],
    },
  ],
  frontEndOnlyCategory: { type: String, required: true },
  showcased: Boolean,
});

productSchema.virtual("isRated").get(function () {
  return this.ratingAndReviews.rating !== undefined || null || NaN;
});

productSchema.virtual("isReviewed").get(function () {
  return this.ratingAndReviews.reviews !== "No reviews yet";
});
module.exports = mongoose.model("Product", productSchema);
