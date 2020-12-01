import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
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

const portfolioModel = mongoose.model("portfolio", portfolioSchema);

export default portfolioModel;
