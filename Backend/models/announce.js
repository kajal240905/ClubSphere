const mongoose=require('mongoose');
const Executive = require('./executive');

const announceSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    createdBy:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Executive',
       required:true,
    
    },
     
    isImportant:{
        type:Boolean,
        default:false
    }
    ,
    club:{
        type:String
    },
    expiredAt:{
        type:Date,
        default:null
    },
   
})
module.exports=mongoose.model('Announce',announceSchema);



