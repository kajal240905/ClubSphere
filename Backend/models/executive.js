const mongoose=require('mongoose');
const executiveSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'executive'
    },
    
    club:{
        type:String,
        required:true

    }
    })
  module.exports=mongoose.model('executive',executiveSchema);

