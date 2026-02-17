const express = require('express')
const app = express()
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const BotModel=require("./models/bot.model")
const UserModel=require("./models/user.model")
const chatbotRoutes=require("./routes/chatbot.route.js")
const cors = require("cors");


dotenv.config();
const port=process.env.PORT || 3000

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));


app.get('/', (req, res) => res.send('Hello World!'))

//Middleware
app.use(express.json());


//database connection code
mongoose.connect(process.env.MONGO_URI)
.then(()=>
{
  console.log("Connected to mongodb")
}).catch((error)=>
{
  console.log("Error connectiong to MongoDB", error);
})

//Defining Routes
  app.use("/bot/v1/", chatbotRoutes)



app.listen(port, () => console.log(`Server running on ${port}!`))