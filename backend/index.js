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

// ✅ FIXED CORS CONFIG
app.use(
  cors({
    origin: "https://quorixchatbotbydiya.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Quorix API is running");
});

// ✅ FIXED MONGOOSE CONNECTION
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB");

    // ✅ Start server ONLY after DB connects
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // stop server if DB fails
  });

// Routes
app.use("/bot/v1", chatbotRoutes);