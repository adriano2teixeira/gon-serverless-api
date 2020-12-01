import mongoose from "mongoose";

const consultingSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const consultingsModel = mongoose.model("consultings  ", consultingSchema);

export default consultingsModel;
