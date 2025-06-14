const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Executive=require('../models/executive');
const dotenv = require('dotenv').config();

const JWT_SECRET = process.env.SECRET_KEY;

const verifyUser = async (req, res, next) => {
 
  const token=req.cookies.token;
  
  
  if (!token) {
    return res.status(401).json({ message: 'Token missing from cookie' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    req.user = user; 
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};


const verifyExecutive= async (req, res, next) => {
  
  
  const token=req.cookies.token;
  
  if (!token) {
    return res.status(401).json({ message: 'Token missing from cookie' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const executive = await Executive.findOne({ email: decoded.email });

    if (!executive) {
      return res.status(401).json({ message: 'executive not found' });
    }

    req.executive = executive; 
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid token' });
  }
};



const  checkClub=async (req,res)=>{


}

module.exports = {verifyExecutive,verifyUser,checkClub};
