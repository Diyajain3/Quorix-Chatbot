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
    const user = await User.create({ text });

    // Memory
    const userHistory = await User.find().sort({ timestamp: -1 }).limit(5);
    const botHistory = await Bot.find().sort({ timestamp: -1 }).limit(5);

    const messages = [
      {
        role: "system",
        content: `
You are Quorix AI.

STRICT RULES:
- Always give direct answer
- Never ask many questions
- Never behave like interviewer
- Always respond in structured format

FORMAT (MUST FOLLOW):

### Answer
<direct answer>

### Key Points
- point 1
- point 2
- point 3

### Example (if needed)
(optional)
`,
      },

      ...userHistory.reverse().map(m => ({
        role: "user",
        content: m.text,
      })),
      ...botHistory.reverse().map(m => ({
        role: "assistant",
        content: m.text,
      })),

      {
        role: "user",
        content: text,
      },
    ];

    let aiResponse;

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

    let botReply = aiResponse.choices[0].message.content.trim();

    // 🔥 FORCE STRUCTURE IF MODEL FAILS
    if (!botReply.includes("### Answer")) {
      botReply = `
### Answer
${botReply.split("\n")[0]}

### Key Points
- ${botReply.replace(/\n/g, " ").slice(0, 100)}
- Explained in simple way
- Based on your query
      `;
    }

    // Clean unwanted words
    botReply = botReply
      .replace(/^(Sure|Okay|Here.*?):?/i, "")
      .trim();

    // Save bot response
    const bot = await Bot.create({ text: botReply });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = { Message };