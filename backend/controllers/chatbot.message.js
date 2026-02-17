const User = require("../models/user.model.js");
const Bot=require("../models/bot.model.js")
const Message = async (req, res) => {
    try{
     const text=req.body.text;
      console.log(text);
     if(!text?.trim())
     {
       return res.status(400).json({error:"How can I help You, Write Something"})
     }


     const user= await User.create({//wait tilll database doesn't response
      sender:"user",
      text
     })

     //Here you would typically process the user's message and generate response
     const botResponses = {

  // 👋 Greetings
  "hye": "Hi, How I can help you!!",
  "hlo": "Hi, How I can help you!!",
  "hi": "Hi, How I can help you!!",
  "hello": "Hi, How I can help you!!",
  "hey": "Hey 😊 How can I help you today?",

  // 🤖 About Bot
  "how are you": "I'm doing great! Thanks for asking 😊\nHow about you?",
  "what is your name": "I'm your virtual chatbot assistant 🤖\nI'm here to help you.",
  "who are you": "I'm an AI chatbot made to help you.\nI answer questions and guide users.",
  "who made you": "I was created by my developer.\nMy goal is to help people.",
  "where are you from": "I live on the internet 🌐\nI'm always available online.",

  // 💻 Programming
  "what is python": "Python is a high-level, interpreted programming language.\n• Easy to learn and read\n• Used in AI, web, data science\n• Example: Google, YouTube",

  "what is java": "Java is a platform-independent language.\n• Uses JVM\n• Supports OOP\n• Used in Android and banking apps",

  "what is javascript": "JavaScript makes websites interactive.\n• Runs in browser and server\n• Supports async programming\n• Used in Facebook, Gmail",

  "what is nodejs": "Node.js runs JavaScript on servers.\n• Built on V8 engine\n• Fast and scalable\n• Used in Netflix",

  "what is html": "HTML creates webpage structure.\n• Defines headings and links\n• Works with CSS and JS\n• Used in all websites",

  "what is css": "CSS designs web pages.\n• Controls layout and colors\n• Makes sites responsive\n• Supports animations",

  "what is mongodb": "MongoDB is a NoSQL database.\n• Stores JSON data\n• Flexible and scalable\n• Used in Uber, eBay",

  "what is database": "Database stores information.\n• Helps manage data\n• Improves security\n• Used in all software",

  "what is api": "API connects software systems.\n• Helps data exchange\n• Used in apps\n• Example: Google Maps",

  "what is programming": "Programming is writing instructions for computers.\n• Automates tasks\n• Builds software\n• Solves problems",

  // 📚 DSA & CS
  "what is dsa": "DSA means Data Structures and Algorithms.\n• Improves problem solving\n• Used in interviews\n• Optimizes code",

  "what is array": "Array stores multiple values.\n• Same data type\n• Continuous memory\n• Fast access",

  "what is linked list": "Linked list uses nodes.\n• Connected by pointers\n• Dynamic size\n• Used in memory management",

  "what is stack": "Stack follows LIFO.\n• Last in first out\n• Used in undo operations\n• Used in recursion",

  "what is queue": "Queue follows FIFO.\n• First in first out\n• Used in scheduling\n• Used in printers",

  "what is recursion": "Recursion is function calling itself.\n• Needs base case\n• Used in trees\n• Used in factorial",

  "what is operating system": "OS manages hardware.\n• Controls memory\n• Handles processes\n• Example: Windows",

  "what is compiler": "Compiler converts code.\n• Checks errors\n• Improves speed\n• Example: GCC",

  "what is git": "Git tracks code changes.\n• Helps teamwork\n• Supports branches\n• Used with GitHub",

  "what is github": "GitHub hosts code online.\n• Stores repositories\n• Helps collaboration\n• Supports open source",

  // 🌍 General Knowledge
  "who is prime minister of india": "Narendra Modi is PM since 2014.\n• BJP leader\n• From Varanasi\n• Started Digital India",

  "what is g20": "G20 is global forum.\n• 19 countries + EU\n• Focus on economy\n• India hosted in 2023",

  "what is ai": "AI makes machines intelligent.\n• Used in chatbots\n• Learns from data\n• Supports automation",

  "what is machine learning": "ML is part of AI.\n• Learns from data\n• Makes predictions\n• Used in Netflix",

  "what is cloud computing": "Cloud provides online services.\n• No physical servers\n• Easy access\n• Example: AWS",

  // 🏏 Sports
  "who is virat kohli": "Virat Kohli is Indian cricketer.\n• Former captain\n• Chase Master\n• Fitness icon",

  "what is ipl": "IPL is T20 league.\n• Started in 2008\n• Franchise teams\n• Huge fan base",

  // 💼 Interview
  "tell me about yourself": "Start with intro.\n• Skills\n• Projects\n• Goals",

  "why should we hire you": "Show your value.\n• Skills\n• Confidence\n• Motivation",

  "what is interview": "Interview tests skills.\n• Technical round\n• HR round\n• Personality check",

  "what is leadership": "Leadership means guiding team.\n• Motivates others\n• Takes decisions\n• Builds success",

  "what is teamwork": "Teamwork means working together.\n• Builds trust\n• Improves results\n• Encourages ideas",

  "what is resume": "Resume shows profile.\n• Education\n• Skills\n• Experience",

  "what is communication": "Communication shares ideas.\n• Improves confidence\n• Builds relations\n• Helps career",

  // 💪 Motivation
  "motivate me": "Believe in yourself 💪\nHard work brings success.",
  "i am sad": "It's okay to feel sad ❤️\nYou are not alone.",
  "i am tired": "Take rest 😊\nHealth is important.",
  "i am stressed": "Relax 💙\nEverything will be fine.",
  "what is confidence": "Confidence means self-belief.\n• Improves speaking\n• Builds leadership",

  "what is success": "Success is achieving goals.\n• Needs effort\n• Needs patience\n• Needs focus",

  "what is failure": "Failure teaches lessons.\n• Builds experience\n• Improves skills\n• Leads to success",

  "what is time management": "Time management plans work.\n• Saves time\n• Reduces stress\n• Improves results",

  // 😂 Fun
  "tell me a joke": "Why do programmers hate bugs? 😂\nBecause they multiply!",
  "tell me something funny": "Java and Python always fight 😄\nThey never agree!",
  "do you like me": "Of course ❤️\nYou are amazing.",
  "i love you": "That's sweet 🥰\nI'm always here.",

  // 🇮🇳 Hindi
  "kaise ho": "Main theek hoon 😊\nAap kaise ho?",
  "kese ho": "Main badhiya hoon 😄\nAap batao?",
  "namaste": "Namaste 🙏\nAapka swagat hai.",
  "shukriya": "Aapka swagat hai 😊\nKhushi hui madad karke.",

  // ⏰ Time
  "what is time": "I can't access clock ⏰\nPlease check device.",
  "what is date": "I can't access calendar 📅\nPlease check phone.",

  // 🙏 Thanks
  "thank you": "You're welcome 🙏\nAnytime!",
  "thankyou": "No problem 😄\nKeep learning!",
  "thanks": "Happy to help 😊\nStay positive.",

  // 👋 Goodbye
  "bye": "Goodbye 👋\nTake care!",
  "goodbye": "See you soon 😊\nCome back!",
  "see you later": "Sure 😄\nVisit again!"
};



const normalizedText= text.toLowerCase().trim().replace(/[^\w\s]/gi, "");

let botResponse =
      Object.keys(botResponses).find((key) =>
        normalizedText.includes(key)
      );

    const finalResponse = botResponse
      ? botResponses[botResponse]
      : "Sorry 😔 I didn't understand. Please try again.";

const bot=await Bot.create({
  text:finalResponse
})

return res.status(200).json({
  userMessage:user.text,
  botMessage:bot.text,
})
    }catch(error)
    {
         console.log("Error in Message Controller");
         return res.status(500).json({error:"Internal Server Error"});
    }
};

module.exports = { Message };
