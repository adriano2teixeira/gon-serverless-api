import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const newsletterModel = mongoose.model("newsletter", newsletterSchema);

export default newsletterModel;
