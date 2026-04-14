const mongoose = require("mongoose");

const botSchema = new mongoose.Schema({
  sender: {
    type: String,
    enum: ["bot"],
    default: "bot"
  },
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Bot = mongoose.model("Bot", botSchema);

module.exports = Bot;