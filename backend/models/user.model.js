const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ["user"],
    default: "user"
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;