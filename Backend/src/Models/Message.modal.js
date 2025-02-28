import mongoose from "mongoose";


const MessageSchema= new mongoose.Schema({
    Name:{
     type:String,
     required:true
    },
    Email:{
        type:String,
        required:true
       },
       Service:{
        type:String,
        required:true
       },
       Message:{
        type:String,
        required:true
       }
},
    
    
{timestamps:true})


export  const Message=mongoose.model("Message",MessageSchema);