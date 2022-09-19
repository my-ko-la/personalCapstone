const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    hashedPassword: { type: String, required: true },
    billingAddress: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    shippingAddress: {
      street: String,
      city: String,
      state: String,
      zip: String,
    },
    idAdmin: {
      type: Boolean,
      default: false,
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
