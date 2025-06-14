
const mongoose=require('mongoose');


const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:null
    },

    quantity:{
        type:Number,
        required:true
    },

    issuedTo:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ]
    },
    club:{
       type:mongoose.Schema.Types.ObjectId,
       ref:'Club'
    }


    
})
module.exports=mongoose.model('Item',ItemSchema)