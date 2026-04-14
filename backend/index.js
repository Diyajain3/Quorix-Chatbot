require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const chatbotRoutes = require("./routes/chatbot.route.js");

// Models
require("./models/bot.model");
require("./models/user.model");

const port = process.env.PORT || 4000;

// =====================
// ✅ CORS MUST BE FIRST
// =====================
app.use(
  cors({
    origin: "https://quorixchatbotbydiya.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ HANDLE PRE-FLIGHT REQUEST
app.options("*", cors());

// =====================
// Middleware
// =====================
app.use(express.json());

// =====================
// Routes (MUST BE BEFORE LISTEN)
// =====================
app.use("/bot/v1", chatbotRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Quorix API is running");
});

// =====================
// DATABASE + SERVER START
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`🚀 Server running on ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });