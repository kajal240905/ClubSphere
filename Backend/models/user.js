const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLen : 6,
        maxLen : 25

    },
    email:{
       type:String,
       required:true,
       length:22,
       unique:true,
       lowercase:true
    },
    password:{
         type:String,
         required:true,
         minLen:8,
    },
    role:{
        type:String,
        enum:['user','member'],
        default:'user'
        
    },
    club:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Club',
        required : ()=>{
            return this.role==='member'
        }
    },
    year: String,
    branch:String,
    rollno:String,
    course:String,
    issuedItems:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Item'
        }
    ],
    image:{
     type:String
    }
    
},
{timestamps:true} )
module.exports = mongoose.model('User',userSchema);