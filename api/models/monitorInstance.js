const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
 should this have a delivery status / sold fields?
*/

const monitorInstanceSchema = new Schema({
  monitor: {
    type: Schema.Types.ObjectId,
    ref: "Monitor",
    required: true,
  },
  ordered: Boolean,
});
