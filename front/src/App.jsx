import { useState ,useEffect} from 'react'
import React from 'react' 
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import axios from 'axios'

import Home from './pages/Home'
import Login from './pages/Login'

import TechHome from './pages/clubs/tech/TechHome'
import CfacHome from './pages/clubs/cfac/CfacHome'
import LiteHome from './pages/clubs/lite/LiteHome'
import SportsHome from './pages/clubs/sports/SportsHome'
import PhotoHome from './pages/clubs/photography/PhotoHome'

import AllClubs from './pages/AllClubs'
import SignUp from './pages/SignUp'

import AboutTech from './pages/clubs/tech/AboutTech'
import AboutCfac from './pages/clubs/cfac/AboutCfac'
import AboutLite from './pages/clubs/lite/AboutLite'
import AboutPhoto from './pages/clubs/photography/AboutPhoto'
import AboutSports from './pages/clubs/sports/AboutSports'

 import MaterialsTech from './pages/clubs/tech/MaterialsTech'
import MaterialSports from './pages/clubs/sports/MaterialSports'


import TechEvents from './pages/clubs/tech/TechEvents'  
import CfacEvents from './pages/clubs/cfac/CfacEvents'  
import PhotoEvents from './pages/clubs/photography/PhotoEvents'  
import SportsEvents from './pages/clubs/sports/SportsEvents'  
import LiteEvents from './pages/clubs/lite/LiteEvents'  



import PaymentForm from './pages/PaymentForm'
import Chat from './pages/Chat'
import AddEvent from './pages/AddEvent'
import AdminPower from './pages/AdminPower'
import AddAnnounce from './pages/AddAnnounce'
import AddItems from './pages/AddItems'
import RemoveItem from './pages/RemoveItem'
import IssueItem from './pages/IssueItem'
import ReturnItem from './pages/ReturnItem'
import Announcement from './pages/Announcement'
import AddPost from './pages/AddPost'
import Post from './pages/Post'
import AddMember from './pages/AddMember'
import ViewUserProfile from './pages/ViewUserProfile'
import ViewExecutiveProfile from './pages/ViewExecutiveProfile'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import Video from './pages/Video'
import RemoveMember from './pages/RemoveMember'
import ViewParticipants from './pages/ViewParticipants'
import ShowParticipants from './pages/ShowParticipants'

export default function App() {
  return(
   <>
<Router>
  <Routes>
   
   <Route path='/' element={<Home />}/>
   <Route path='/login' element={<Login />}/>
   
   <Route path='/signup' element={<SignUp />}/>
   <Route path='/allClubs' element={<AllClubs />}/>

   <Route path='/techHome' element={<TechHome />}/>
   <Route path='/aboutTech' element={<AboutTech/>}/>
   <Route path='/materialsTech' element={<MaterialsTech/>} /> 
   <Route path='/TechEvents' element={<TechEvents/>} /> 

   <Route path='/cfacHome' element={<CfacHome />}/>
   <Route path='/aboutCfac' element={<AboutCfac/>}/>
   <Route path='/CfacEvents' element={<CfacEvents/>} />
   
  

   <Route path='/sportsHome' element={<SportsHome/>}/>
   <Route path='/aboutSports' element={<AboutSports/>}/>
   <Route path='/materialSports' element={<MaterialSports/>} /> 
   <Route path='/SportsEvents' element={<SportsEvents/>} />  

   <Route path='/photoHome' element={<PhotoHome/>}/>
   <Route path='/aboutPhoto' element={<AboutPhoto/>} />
   <Route path='/PhotoEvents' element={<PhotoEvents/>} />  



   <Route path='/liteHome' element={<LiteHome/>}/>
   <Route path='/aboutLite' element={<AboutLite/>}/>
     <Route path='/LiteEvents' element={<LiteEvents/>} /> 

  


  <Route path='/chat' element ={<Chat />} />
  <Route path='addEvent'  element={<AddEvent/>}/>
  <Route path='/adminPower' element={<AdminPower />} />
  <Route path='/addAnnounce' element={<AddAnnounce/>} />
  <Route path='/addItems' element ={<AddItems />} />
  <Route path='/removeItem' element ={<RemoveItem />} />
  <Route path='/issueItem' element ={<IssueItem />} />
  <Route path='/returnItem' element ={<ReturnItem />} />
  <Route path='/announcement' element={<Announcement />} />
  <Route path='/addPost' element={<AddPost/>} />
  <Route path='/viewPost' element={<Post/>} />
  <Route path='/viewUserProfile' element={<ViewUserProfile/>} />
  <Route path='/viewExecutiveProfile' element={<ViewExecutiveProfile/>} />
  <Route path='/payment' element={<PaymentForm/>} />
  <Route path='/addMember' element={<AddMember/>} />
  <Route path='/removeMember' element={<RemoveMember/>} />
  <Route path='/forgotPassword' element={<ForgotPassword/>} />
  <Route path='/resetPassword' element={<ResetPassword/>} />
  <Route path='/viewParticipants' element={<ViewParticipants/>} />
  <Route path='/showParticipants' element={<ShowParticipants/>} />
  <Route path='/video' element={<Video />} />


 </Routes>
 </Router>
 

 
   
   </>
  )
}

