const Club = require('../models/club');
const Event=require('../models/events');
const User=require('../models/user');
const Post=require('../models/post');
const Announce=require('../models/announce');
const Executive=require('../models/executive')
const {upload ,uploadImage}= require('./uploadController')



const addClub = async (req, res) => {
  const { name, description, faculty_admin, executive} = req.body;

  try {
   
    if (!name || !description || !faculty_admin || !executive) {
      return res.status(400).json({ message: 'Please enter all fields' });
    }

    const newClub = Club.create({
      name,
      description,
      faculty_admin,
      executive,
      
    });

    
    return res.status(201).json({ message: 'Club added successfully' });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};




const addEvent = async (req, res) => {
  console.log(req.body)
  try {
    const {
      name,
      description,
      eventHead,
      eventDateTime,
      eventVenue,
      club ,
      registrationFee
    } = req.body;

    if (!name || !description || !eventHead ||!eventDateTime  || !eventVenue || !club) {
      return res.status(400).json({ message: "Please enter all fields" });
    }

    const clubname = club;
    const findClub = await Club.findOne({ name: clubname});

    if (!findClub) {
      return res.status(404).json({ message: "Club not found" });
    }

      const findClubbb=req.executive.club
      
      if(findClubbb!==club){
        return res.status(500).json('Sorry you cant make request')
      }

    const newEvent = await Event.create({
      name,
      description,
      eventHead,
      eventDateTime,
      eventVenue,
      club,
      registrationFee
    });
    

    findClub.events.push(newEvent._id);
    await findClub.save();

    return res.status(200).json({ message: "Event added successfully", event: newEvent });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const addPost=async(req,res)=>{
  console.log(req.body)
   const {title,content ,club}=req.body;
  try{
 if(!title || !content ||!club){
  return res.status(400).json({message:"Please enter all fields"});
 }
 if(!req.file){
   return res.status(400).json({message:"Image not uploaded"});
 }
 const authorDetails = req.executive
 console.log(authorDetails)
 if (!authorDetails) {
  return res.status(404).json({ message: "Author not found" });
}
 const findClub=req.executive.club
 if(findClub!==club){
   console.log('You cannot create a post')
 }

 



   const imageUrl=`https://clubsphere-production.up.railway.app/uploads/${req.file.filename}`

  const newPost=await Post.create({
    title,
    content,
   club,
    image:imageUrl,
    Date:Date.now(),
    likes:0,
    
  });
  return res.status(200).json({message:"Post added successfully",post:newPost});

}
  catch(err){
    console.error(err);
    return res.status(500).json({message:"Something went wrong"});
  }
}
  

const likePost=async(req,res)=>{
 
  try{
  const postId=req.body.postId;
  
  const post=await Post.findById(postId);
  if(!post){
    return res.status(404).json("Post not found")
  }
  let userId;
if (req.executive) {
  userId = req.executive._id;
} else if (req.user) {
  userId = req.user._id;
}
 console.log(userId)
 const findPost = post.likedBy.includes(userId);
 console.log(findPost)

if(findPost){
  post.like=post.like-1
  
  post.likedBy.pop(userId)
   await post.save()
  return res.status(200).json(post.like)
}

  post.like=post.like+1;
  post.likedBy.push(userId)
  await post.save()
  return res.status(200).json(post.like)
  }
  catch(e){
    console.log(e)
    return res.status(400).json("Error" + e.message)
  }
}

const showPosts=async(req,res)=>{
  try{

    const allPosts = await Post.find();
    return res.status(200).json({posts:allPosts});

  }
  catch(e){
  return res.status(500).json({message:"Something went wrong"});
  }
}


const deletePost=async(req,res)=>{
  console.log("hi")
  
  
  const postId=req.body.params.postId;
  console.log(postId)
try{
  const post=await Post.findByIdAndDelete(postId);
  if(!post){
    return res.status(404).json({message:"Post not found"});
  }

  return res.status(200).json({message:"Post deleted successfully"});

}
catch(err){
  console.log(err);
    return res.status(500).json({message:"Something went wrong"});
}

}

const commentPost=async(req,res)=>{
  const {postId}=req.params;
  
  
 const {text}=req.body;
 console.log(req.user)
 try{
  const post=await Post.findById(postId);
  if(!post){
    return res.status(404).json({message:"Post not found"});
  }

      if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "Unauthorized" });
    }
  post.comment.push({
    text:text,
    user:req.user._id,
    date:Date.now()
  });
  await post.save();
  return res.status(200).json({message:"Comment added successfully"});

 }
 catch(err){
  console.log(err);
  return res.status(500).json({message:"Something went wrong"});
 }


}

const announce=async(req,res)=>{
  console.log(req.body)
  const {title,description,club}=req.body;

 try{

if(!title || !description || !club ){
  return res.status(400).json({message:"Please enter all fields"});
}
  if(!req.executive){
    return res.status(401).json({message:"Unauthorized"});
  }
  console.log(req.executive)
  const findclub=req.executive.club
  console.log(findclub)
  console.log(club)
  if(findclub!==club){
    return res.status(400).json('Sorry you cannot make request')
  }

  const newAnnounce=await Announce.create({
  title,
  description,
  club,
  date:Date.now(),
  createdBy:req.executive._id
});
return res.status(200).json({message:"Announce added successfully",announce:newAnnounce});
 
}
 catch(err){
  console.log(err);
      return res.status(500).json({message:"Something went wrong"});
 }
}

const getAllAnnouncement = async(req,res)=>{
  try{
    
    const allAnnounce=await Announce.find();
    console.log(allAnnounce)
     return res.status(200).json(allAnnounce);
  }
  catch(err){
   console.log(err);
   return res.status(500).json({message:"Something went wrong"});
  }
}

const addMember=async(req,res)=>{
  const {email,club}=req.body;
  console.log(req.body)
  const user=await User.findOne({email})
  console.log(user)
  if(!user){
    return res.status(404).json("User not found")
  }
  const findClub=await Club.findOne({name:club})
  console.log(findClub)
  if(!findClub){
    return res.status(404).json("Club not found")
  }
  const userId=user._id
  const exClub=req.executive.club;
  console.log(req.executive)
  console.log(exClub)
  console.log(user.club)
  if(findClub.name!==exClub){
     return res.status(400).json("Sorry you do not have authority to do this ")
  }
  user.role="member"
   user.club =  findClub._id
  findClub.members.push(user._id)
  await user.save()
  await findClub.save()
  return res.status(200).json("Member is added successfully")
}


const viewUserProfile=async(req,res)=>{
  
 try{
  const  email=req.user.email
    const findUser=await User.findOne({email})
    if(!findUser){
      return res.status(404).json("Email not found")
    }
    return res.status(200).json(findUser)
  }
  
   
  catch(e){
    console.log(e)
    return res.status(500).json("Internal server error")
  }
  
}
const viewExecutiveProfile=async(req,res)=>{
  console.log("req aayii")
  try{
  const email=req.executive.email
  console.log(email)
    const findExecutive=await Executive.findOne({email})
    console.log(findExecutive)
     if(!findExecutive){
      return res.status(404).json("Email not found")
    }
    return res.status(200).json(findExecutive)
  }
  catch(e){
    console.log(e)
    return res.status(500).json("Internal server error")
  }

}

const getParticipants=async(req,res)=>{
  try{
  const {name,club}=req.body;
  if(!name || !club){
    return res.status(400).json("Please enter all fields")
  }
  const findEvent=await Event.findOne({name})
  if(!findEvent){
    return res.status(404).json("Event not found")
  }

const findClub=await Club.findOne({name:club})
if(!findClub){
    return res.status(404).json("Club not found")
  }
const exClub=req.executive.club;
  if(findClub.name!==exClub){
     return res.status(400).json("Sorry you do not have authority to do this ")
  }

  const participants=findEvent.participants
   return res.status(200).json(participants)

}
catch(error){
  return res.status(500).json("Internal server error")
}
}


const removeMember=async(req,res)=>{
  const {email,club}=req.body;
  const user=await User.findOne({email})
  if(!user){
    return res.status(404).json("User not found")
  }
  const findClub=await Club.findOne({name:club})
  if(!findClub){
    return res.status(404).json("Club not found")
  }
  const userId=user._id
  const exClub=req.executive.club;
  if(findClub.name!==exClub){
     return res.status(400).json("Sorry you do not have authority to do this ")
  }
  user.role="user"
  user.club=null
  findClub.members.pop(user._id)
  await user.save()
  await findClub.save()
  return res.status(200).json("Member is removed successfully")
}


const deleteEvent=async(req,res)=>{
  const {eventId}=req.params;
try{
  const event=await Event.findByIdAndDelete(eventId);

  if(!event){
    return res.status(404).json({message:"Event not found"});
  }
  const club=event.club
  const findClub=await Club.findOne({name:club})
  if(!findClub){
    return res.status(404).json({message:"Club not found"});

  }
  findClub.events.pop(event._id)
   await findClub.save()

  return res.status(200).json({message:"Event deleted successfully"});

}
catch(err){
  console.log(err);
    return res.status(500).json({message:"Something went wrong"});
}
}

module.exports={addClub,addEvent,addPost ,likePost ,showPosts,deletePost,commentPost,announce,getAllAnnouncement,addMember,viewUserProfile,
  viewExecutiveProfile,getParticipants,removeMember,deleteEvent
}
