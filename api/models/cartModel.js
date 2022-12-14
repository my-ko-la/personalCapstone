const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      amount: {
        type: Number,
        default: 0,
        min: 0,
      },
    },
  ],
  total: {
    type: Number,
  },
});

cartSchema.virtual("getTotal").get(function () {
  const totalValue = this.items.reduce((acc, val) => {
    acc += val.product.price * val.product.amount;
  }, 0);
  return totalValue;
});

module.exports = mongoose.model("Cart", cartSchema);
