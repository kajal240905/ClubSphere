const mongoose=require('mongoose');
const commentSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true
    },
    user:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
  
    },
    date: {
      type: Date,
      default: Date.now
    }
  })
const postSchema=new mongoose.Schema({
    title:{
        type:String
        
    },
    image:{
      type:String,
        },
   comment:[commentSchema],
like:{
    type:Number,
    default:0
},
likedBy:[{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User'
}],


  content: {
    type: String,
    required: true
  },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  club:{
    type:String,
    required:true
  },
  
  date: {
    type: Date,
    default: Date.now
    }
});

module.exports=mongoose.model('Post',postSchema);