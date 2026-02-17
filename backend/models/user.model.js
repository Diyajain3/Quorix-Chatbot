
const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
  sender:{
    type: String,
    required: true,//needed if the info is wanted in any condition [we need to provide it]
    enum:["user"]
  },
  text:{
    type:String,
    required:true
  },
  timestamp:{
    type:Date,
    default:Date.now()
  }

})

const User=mongoose.model("User",userSchema);

module.exports = User;