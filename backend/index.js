// 🔥 1. LOAD ENV VARIABLES FIRST (VERY IMPORTANT)
require("dotenv").config();

const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const chatbotRoutes = require("./routes/chatbot.route.js");

// Models (optional import, but fine if you keep)
require("./models/bot.model");
require("./models/user.model");

// Port
const port = process.env.PORT || 4000;

// 🔥 2. MIDDLEWARES
app.use(cors({
  origin: [
    "http://localhost:5173", // frontend
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// 🔥 3. TEST ROUTE
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 🔥 4. DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((error) => {
    console.log("❌ Error connecting to MongoDB:", error);
  });

// 🔥 5. ROUTES
app.use("/bot/v1", chatbotRoutes);

// 🔥 6. START SERVER
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});