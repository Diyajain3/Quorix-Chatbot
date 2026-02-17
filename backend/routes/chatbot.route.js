const express = require('express')
const { Message } = require('../controllers/chatbot.message');


const router=express.Router();

router.post("/message",Message)

module.exports= router;