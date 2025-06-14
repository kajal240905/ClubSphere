const mongoose=require('mongoose');

const eventSchema={
    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },
    eventHead:{
        type:String,
        required:true
    },
    eventDateTime: {
    type: Date,
    required: true,
    expires: 0  
    },
    eventVenue:{
        type:String,
        required:true
    },

    club:{
    type:String,
    required:true
    },
    participants:{
        type:Array,
    },
    registrationFee:{
        type:Number,
        
    }
    }
    
module.exports=mongoose.model('Event',eventSchema)
