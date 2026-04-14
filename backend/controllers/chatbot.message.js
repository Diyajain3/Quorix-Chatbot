const User = require("../models/user.model.js");
const Bot = require("../models/bot.model.js");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

const Message = async (req, res) => {
  try {
    const text = req.body.text;

    if (!text || !text.trim()) {
      return res.status(400).json({
        error: "Write something 😊",
      });
    }

    // Save user message
    const userMessage = await User.create({
      text,
      timestamp: new Date(),
    });

    // 🔥 FIXED: Proper memory ordering (combine both)
    const userHistory = await User.find().sort({ createdAt: -1 }).limit(5);
    const botHistory = await Bot.find().sort({ createdAt: -1 }).limit(5);

    let history = [];

    userHistory.forEach((u) => {
      history.push({ role: "user", content: u.text });
    });

    botHistory.forEach((b) => {
      history.push({ role: "assistant", content: b.text });
    });

    const messages = [
      {
        role: "system",
        content:
          "You are Quorix, a smart AI assistant for coding, problem solving, and motivation. Always respond clearly and structured.",
      },
      ...history,
      {
        role: "user",
        content: text,
      },
    ];

    let aiResponse;

    // 🔥 SAFE MODEL CALL WITH FALLBACK
    try {
      aiResponse = await openai.chat.completions.create({
        model: "meta-llama/llama-3-8b-instruct",
        messages,
        temperature: 0.2,
      });
    } catch (err) {
      aiResponse = await openai.chat.completions.create({
        model: "google/gemma-7b-it:free",
        messages,
        temperature: 0.2,
      });
    }

    let botReply = aiResponse?.choices?.[0]?.message?.content?.trim() || "Sorry, no response.";

    // 🔥 STRUCTURE FIX (safe formatting)
    if (!botReply.includes("Answer")) {
      botReply = `Answer:\n${botReply}\n\nKey Points:\n- ${botReply
        .replace(/\n/g, " ")
        .slice(0, 120)}`;
    }

    // cleanup
    botReply = botReply.replace(/^(Sure|Okay|Here.*?):?/i, "").trim();

    // Save bot message
    const botMessage = await Bot.create({
      text: botReply,
      timestamp: new Date(),
    });

    return res.status(200).json({
      userMessage: userMessage.text,
      botMessage: botMessage.text,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = { Message };