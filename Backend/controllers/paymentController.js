const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();
const sendEmail = require('../utils/sendEmail');
const Event=require('../models/events')
const Club=require('../models/club')
const User=require('../models/user');



const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.RAZORPAY_SECRET
});
let eventy;
const createOrder = async (req, res) => {
   console.log(req.body)
  const { amount,event } = req.body;
  
 console.log(req.body)
  eventy=event
  console.log(eventy)
  const options = {
    amount: amount * 100,
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    
    return res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay Order Error:", error);
    return res.status(400).json("Not able to create order");
  }
};


// const verifyOrder = async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//   const sign = razorpay_order_id + '|' + razorpay_payment_id;

//   const expected_signature = crypto
//     .createHmac('sha256', process.env.RAZORPAY_SECRET)
//     .update(sign.toString())
//     .digest('hex');


//   if (razorpay_signature === expected_signature) {
   
//     const findEvent=await Event.findOne({name:eventy})
//     if(!findEvent){
//       return res.status(200).json("Event not found")
//     }
//     const user=req.user;
//     console.log(req.user)
    
//     findEvent.participants.push(user)
//     console.log(findEvent.participants)
//     await findEvent.save()
//      const emailMessage = `
//     Hello ${req.user.name},

//    Thank you for registering for the event "${findEvent.name}" organized by the ${findEvent.club}.

//   📅 Event Date: ${new Date(findEvent.eventDate).toLocaleDateString()}
//   ⏰ Time: ${findEvent.eventTime}
//   📍 Venue: ${findEvent.eventVenue}

//   We’re excited to have you join us! Please arrive 10-15 minutes early for a smooth check-in process.

//   If you have any questions or need assistance, feel free to reach out to us.

//   Regards,  
//   Event Coordination Team

//   ----------------------------------------
//   For any support, contact us at:
//   support@events.com
// `;


//   console.log(req.user.email)

//     await sendEmail(req.user.email, 'Event registration', emailMessage);
//     return res.status(200).json({ success: true, message: "Payment successful" });
//   } else {
//     return res.status(400).json({ success: false, message: "Payment unsuccessful" });
//   }
// };
const verifyOrder = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, eventName } = req.body;

  const sign = razorpay_order_id + '|' + razorpay_payment_id;

  const expected_signature = crypto
    .createHmac('sha256', process.env.RAZORPAY_SECRET)
    .update(sign.toString())
    .digest('hex');

  if (razorpay_signature === expected_signature) {
    const findEvent = await Event.findOne({ name: eventName }); // ✅ use local eventName
    if (!findEvent) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    const user = req.user;
    findEvent.participants.push(user);
    await findEvent.save();

    const emailMessage = `...`; // your existing email content
    await sendEmail(user.email, 'Event registration', emailMessage);

    return res.status(200).json({ success: true, message: "Payment successful" });
  } else {
    return res.status(400).json({ success: false, message: "Payment unsuccessful" });
  }
};


module.exports = { createOrder, verifyOrder };
