const dotenv=require('dotenv')
dotenv.config();
const sendEmail = require('../utils/sendEmail');

const   Events = require('../models/events')
const Club = require('../models/club')
const User = require('../models/user')

const GetEvent = async (req,res)=>{
    try{
 const findEvent = req.params.findEvent;
    const findevent =  await Events.findOne({name:findEvent});
    if(!findevent)return res.status(404).json({message:'event not found'});
    return res.status(200).json(findevent);
    }

    catch(error){
        return res.status(500).json({message:'server error',error:error.message})    }
}

const EventRegistration = async(req,res)=>{
    try{
     
      const {eventName,fee}=req.body
      const findevent=await Events.findOne({name:eventName})
       if(!findevent){
        return res.status(404).json({message:"Event not found"})
       }
       console.log(findevent)
       const user=req.user
       console.log(user)
   
      findevent.participants.push(user);
        await findevent.save()

     const emailMessage = `
  Hello ${req.user.email},

  Thank you for registering for the event "${findevent.name}" organized by the ${findevent.club}.

  📅 Event Date: ${new Date(findevent.eventDate).toLocaleDateString()}
  ⏰ Time: ${findevent.eventTime}
  📍 Venue: ${findevent.eventVenue}

  We’re excited to have you join us! Please arrive 10-15 minutes early for a smooth check-in process.

  If you have any questions or need assistance, feel free to reach out to us.

  Regards,  
  Event Coordination Team

  ----------------------------------------
  For any support, contact us at:
  support@events.com
`;


  console.log(req.user.email)

    await sendEmail(req.user.email, 'Event registration', emailMessage);
    
      return res.status(200).json('EMAIL SENT');
      

    }
    catch(e){
        console.log(e);
        return res.status(500).json({message:'something went wrong'})
    }
  
 }

 const getMember=async(req,res)=>{
  
  try{
  const club=req.query.club
    const findClub =await Club.find({name:club});
    if(!findClub) return res.status(400).json('club not found')
      
    const mem = findClub[0].members
    const memberArray=[];
    for(let i=0;i<mem.length;i++){
      const memberDetails = await User.findById({_id:mem[i]});
      memberArray.push(memberDetails)
    }
  
    return res.status(200).json(memberArray);

  }
  catch(e){
        console.log(e);
        return res.status(500).json({message:'something went wrong'})
    }

 }
 const getAllEvents = async(req,res)=>{
  try{
       const clubName = req.query.clubName;
      
       
       const findClub = await Club.findOne({name:clubName});
       
       if(!findClub)return res.status(404).json('club not found')
       const events = findClub.events;
      
       const newArray =[];
       for(let i=0;i<events.length;i++){
         const id = events[i];
         const findevent = await Events.findById(id);
         newArray.push(findevent);
       }
       return res.status(200).json(newArray);

  }
  catch(e){
console.log(e);
return res.status(500).json({message:'internal server error'})
  }
 }

 

module.exports = {EventRegistration,GetEvent,getMember,getAllEvents};


