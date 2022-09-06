const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: { type: String, required: true },
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
});

module.exports = mongoose.model("Customer", customerSchema);
