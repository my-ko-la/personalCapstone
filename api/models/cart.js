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
      product: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        amount: Number,
      },
    },
  ],
  total: {
    type: Number,
  },
});

module.exports = mongoose.model("Cart", cartSchema);
