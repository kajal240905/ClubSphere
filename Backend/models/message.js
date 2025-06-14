const mongoose=require('mongoose')

const messageSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    senderClub:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Club',
        required:true
    },

    recieverClub:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Club',
        required:true
    },
    content:{
        type:String,
        required:true
    },
    timestamps:{
        type:Date,
        default:Date.now
    }

    
})

module.exports=mongoose.model('Message',messageSchema)