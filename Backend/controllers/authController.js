const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
const Club = require('../models/club')
const Executive = require('../models/executive')
const nodemailer=require('nodemailer')

dotenv.config();

const register = async (req, res) => {
  const { name, email, password, role, club: clubName } = req.body;
  console.log(req.body);
  try {
    const studentEmailRegex = /^(bt|mt|phd)(\d{2})(cse|ece|eee|mec|civ)(\d{3})@nituk\.ac\.in$/;
    const match = email.match(studentEmailRegex);
    if (!match) {
      return res.status(400).json({ message: "invalid email format" });
    }

    const course = match[1];
    const year = match[2];
    const branch = match[3];
    const roll = match[4];

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'user already exists' });
    }

    if (role === 'executive') {
      return res.status(400).json({ message: 'executive role is not allowed for students' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let clubname = null;
    if (role === 'member') {
      clubname = await Club.findOne({ name: clubName });
      if (!clubname) {
        return res.status(400).json({ message: 'Club not found' });
      }
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role,
      year,
      branch,
      roll,
      course,
      club: clubname ? clubname._id : null
    });

    await newUser.save();

    if (role === 'member') {
      clubname.members.push(newUser._id);
      await clubname.save();
    }

    
    const token = jwt.sign({ email: newUser.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
      res.cookie('token', token, { maxAge: 60 * 60 * 1000 });
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Internal server error', error: e.message });
  }
};


const login = async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email})
        
        if(!user){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token=jwt.sign({email:user.email},process.env.SECRET_KEY,{expiresIn:"1h"});
         res.cookie('token', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'None',
  maxAge: 60 * 60 * 1000 // 1 hour
});
        res.status(200).json({message:"User login successful",
      
            token,
            user:{
             name:user.name,
             email:user.email
            }
        }
        )
        
        



    }
    catch(error){
    return  res.status(500).json({message:"Server Error",error:error.message})
    }

}

const loginFaculty = async (req,res)=>{
    const {email,password}=req.body;
    try{
        if(!email || !password){
            return res.status(400).json({message:'please enter all fields'})     
        }
        if(email===process.env.CFAC_F && password===process.env.CFAC_PAS){
            return res.status(200).json({message:'login successful You are faculty of cfac'})
        }
        if(email===process.env.TECH_F  && password===process.env.TECH_PAS){
            
            return res.status(200).json({message:'login successful You are faculty of tech'})
        }
        if(email===process.env.LITERARY_F  && password===process.env.LITERARY_PAS){
            return res.status(200).json({message:'login successful You are faculty of lite'})
        }
        if(email===process.env.SPORTS_F  && password===process.env.SPORTS_PAS){
            return res.status(200).json({message:'login successful You are faculty of sports'})
        }
        if(email===process.env.PHOTO_F && password===process.env.PHOTO_PAS){
            return res.status(200).json({message:'login successful You are faculty of photo'})
        }
        return res.status(400).json({message:'invalid credentials'})

    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:'server error',error:error.message})

    }


}
const registerExecutive= async (req,res)=>{
 const {email,password,club,role}=req.body;
 console.log(req.body)
    try{
        if(!email || !password||!club  ){
            return res.status(400).json({message:'please enter all fields'})     
        }
        const emailRegex = /^(cfac|tech|literary|photography|sports)\.executive@gmail\.com$/;

        const match = email.match(emailRegex);



    if (!match) {
      return res.status(400).json({ message: "invalid email format" });
    }
     const  clubname = match[1];
      
    const existingExecutive = await Executive.findOne({ email });
    if (existingExecutive) {
      return res.status(400).json({ message: 'Executive already exists' });
    }

  

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    

    const newExecutive = new Executive({
      
      email,
      password: hashedPassword,
      role,
       
      club: clubname 
    });

    await newExecutive.save();

   const token = jwt.sign({ email: newExecutive.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
       res.cookie('token', token, {
  httpOnly: true,
  secure: true,
  sameSite: 'None',
  maxAge: 60 * 60 * 1000 // 1 hour
});
   res.status(201).json({
      message: 'User registered successfully',
      token,
      Executive: {
      
        email: newExecutive.email
      }
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Internal server error', error: e.message });
  }
}
const loginExecutive = async (req,res)=>{
    const {email,password}=req.body;
    try{
        const executive=await Executive.findOne({email})
        
        if(!executive){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const isMatch=await bcrypt.compare(password,executive.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"})
        }
        const token=jwt.sign({email:executive.email},process.env.SECRET_KEY,{expiresIn:"1h"});
          res.cookie('token', token, { maxAge: 60 * 60 * 1000 });
        res.status(200).json({message:"User login successful",
      
            token,
            user:{
            
             email:executive.email
            }
        }
        )
        
    }
    catch(error){
    return  res.status(500).json({message:"Server Error",error:error.message})
    }

}

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json("Error: User not found");

    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
    console.log(token)
    

    const resetURL = `http://localhost:5173/resetPassword?id=${user._id}&token=${token}`;


    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user:process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
    });

    const mailOptions = {
      to: user.email,
      from: process.env.SMTP_USER,
      subject: 'Password Reset Request',
      text: `Hello ${user.name},

You requested to reset your password.

Click this link to reset: ${resetURL}

If you didn’t request this, please ignore this email.

Thanks,
ClubSphere Team`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Password reset link sent ',
      token,
      userId:user._id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const resetPassword=async(req,res)=>{
  try{
  const {id,token}=req.query
   const {password}=req.body

  const userId=await User.findById(id)
  if(!userId){
    return res.status(404).json({message:"User not found"})
  }
  const decoded=jwt.verify(token,process.env.SECRET_KEY)

  const hashedPassword=await bcrypt.hash(password,10)
   await User.updateOne(
  {
 _id:id
  },
  {
    $set:{
    password:hashedPassword
  
}})
  return res.status(200).json({message:"Password reset successfully"})
}
catch(error){
  console.log(error)
   return res.status(500).json({message:"Internal Server Error"})
}

}

const logOut=async(req,res)=>{
  try{
   
   res.clearCookie('token')
  return res.status(200).json("Logged Out successfully")

  }
  catch(error){
     return  res.status(500).json({message:"Server Error",error:error.message})
  }

}




module.exports={register,login,registerExecutive,loginExecutive,loginFaculty,logOut,
  forgotPassword,resetPassword}
