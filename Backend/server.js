const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors=require('cors')
const bcrypt = require('bcrypt');
const { Server } = require('socket.io');
const cookieParser=require('cookie-parser')
const multer = require('multer')
const {upload,uploadImage} = require('./controllers/uploadController.js') 
const http = require('http');
const { addClub, addEvent,addPost,likePost,showPosts,deletePost,commentPost,announce,getAllAnnouncement,addMember
  ,viewUserProfile,viewExecutiveProfile,getParticipants,removeMember,deleteEvent
} = require('./controllers/AdminController.js');
const { GetEvent, EventRegistration ,getMember,getAllEvents } = require('./controllers/EventController.js');
const {verifyExecutive,verifyUser,checkClub} = require('./middleware/auth.js');
const {addItem,removeItem,issueItem,returnItem,getItems }=require('./controllers/ItemsController.js')
const {createOrder,verifyOrder} =require('./controllers/paymentController.js')
const {aiChat} = require('./controllers/chatController.js')
const { register, login, loginExecutive, loginFaculty,registerExecutive,forgotPassword,resetPassword,
  logOut} = require('./controllers/authController.js');
const connectDB = require('./config/db.js');
dotenv.config();


const port = 3000;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use('/uploads', express.static('uploads'));


app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true               
}));

app.post('/register', register);
app.post('/login', login);
app.post('/logout',logOut)
app.post('/forgotPassword', forgotPassword);
app.post('/resetPassword', resetPassword);
app.post('/loginFaculty', loginFaculty);
app.post('/registerExecutive', registerExecutive);
app.post('/loginExecutive', loginExecutive);

app.post('/loginExecutive/addClub',verifyExecutive, addClub);
app.post('/loginExecutive/addEvent', verifyExecutive,addEvent);
app.get('/login/event',verifyUser, GetEvent);
app.get('/loginExecutive/event',verifyExecutive, GetEvent);
app.post('/login/:eventName/registerIn',verifyUser, EventRegistration);
app.post('/loginExecutive/addPost',verifyExecutive,upload.single('image'),addPost)
app.post('/login/likePost',verifyUser,likePost)
app.post('/loginExecutive/likePost',verifyExecutive,likePost)
app.get('/login/getAllPosts',verifyUser,showPosts);
app.get('/loginExecutive/getAllPosts',verifyExecutive,showPosts);
app.post('/loginExecutive/deletePost',verifyExecutive,deletePost);
app.delete('/loginExecutive/deleteEvent/:eventId',verifyExecutive,deleteEvent);

app.post('/loginExecutive/announce',verifyExecutive,announce);
app.get('/login/getAllAnnouncement',verifyUser,getAllAnnouncement);
app.get('/loginExecutive/getAllAnnouncement',verifyExecutive,getAllAnnouncement);
app.post('/loginExecutive/addItem',verifyExecutive,addItem)
app.post('/loginExecutive/removeItem',verifyExecutive,removeItem)
app.post('/loginExecutive/issueItem',verifyExecutive,issueItem)
app.post('/loginExecutive/returnItem',verifyExecutive,returnItem)
app.get('/loginExecutive/getItem',verifyExecutive,getItems);
app.get('/login/getItem',verifyUser,getItems);

app.get('/login/getMember',verifyUser,getMember);
app.get('/loginExecutive/getMember',verifyExecutive,getMember);
app.get('/login/getAllEvents',verifyUser,getAllEvents);
app.get('/loginExecutive/getAllEvents',verifyExecutive,getAllEvents);

app.post('/login/aiChat',verifyUser,aiChat)
app.post('/loginExecutive/aiChat',verifyExecutive,aiChat)

app.post('/login/createOrder',verifyUser,createOrder)
app.post('/login/verifyOrder',verifyUser,verifyOrder)
app.post('/loginExecutive/addMember',verifyExecutive,addMember)

app.get('/login/viewUserProfile',verifyUser,viewUserProfile)
app.get('/loginExecutive/viewExecutiveProfile',verifyExecutive,viewExecutiveProfile)
app.post('/login/freeRegister',verifyUser,EventRegistration)
app.post('/loginExecutive/getParticipants',verifyExecutive,getParticipants)
app.post('/loginExecutive/removeMember',verifyExecutive,removeMember)

io.on('connection', (socket) => {
  console.log('WebSocket Connected', socket.id);

  socket.on('joinClubRoom', ({ userId, clubId, role }) => {
    if (role === 'member' || role === 'executive') {
      socket.join(clubId);
      socket.data = { userId, clubId, role };
      console.log(`User ${userId} (${role}) joined ${clubId}`);
      socket.emit('joined', `Joined ${clubId}`);
    } else {
      socket.emit('error', 'Unauthorized access');
    }
  });
  
  socket.on('sendMessage', ({ message }) => {
    const { userId, clubId, role } = socket.data || {};
    if (!clubId || !userId || !role) {
      return socket.emit('error', 'Join a room first');
    }
    const chat = {
      sender: userId,
      role,
      message,
      time: new Date()
    };
    io.to(clubId).emit('receiveMessage', chat);
  });

  socket.on('disconnect', () => {
    console.log('WebSocket disconnected', socket.id);
  });
});






const startServer = async () => {
  try {
    await connectDB();
    server.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    });
  } catch (err) {
    console.error('❌ Failed to connect to database', err);
    process.exit(1);
  }
};

startServer();
