const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  customer: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
  order: { type: Schema.Types.ObjectId, ref: "Order", required: true },
  paymentType: { type: String, required: true },
  paymentAmount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
});

module.exports = mongoose.model("Payment", paymentSchema);
