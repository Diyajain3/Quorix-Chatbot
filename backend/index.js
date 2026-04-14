require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Routes
const chatbotRoutes = require("./routes/chatbot.route.js");

// Models
require("./models/bot.model");
require("./models/user.model");

const port = process.env.PORT || 4000;

app.use(express.json());

// =========================
// 🔥 CORS FIX (ROBUST METHOD)
// =========================
const allowedOrigins = [
  "https://quorixchatbotbydiya.vercel.app",
  "https://quorix-chatbot.vercel.app",
  "http://localhost:5173",
  "http://localhost:3000",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  // Allow any vercel.app subdomain for the project or exact origins
  if (
    origin &&
    (allowedOrigins.includes(origin) ||
      /^https:\/\/quorix-chatbot.*\.vercel\.app$/.test(origin))
  ) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

// =========================
// ROUTES
// =========================
app.use("/bot/v1", chatbotRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Quorix API is running");
});

// Health check (VERY IMPORTANT FOR DEBUGGING)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// =========================
// DATABASE CONNECTION
// =========================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("❌ MongoDB connection error:", error);
  });