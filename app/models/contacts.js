import mongoose from "mongoose";

const contactsSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const contactsModel = mongoose.model("portfolio_subscriptions", contactsSchema);

export default contactsModel;
