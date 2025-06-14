import React from "react";
import tech from '../assets/tech.jpg'
import cfac from '../assets/cfac.jpg'
import photo from '../assets/photo.jpg'
import lite from  '../assets/lite.jpg'
import sports from '../assets/sports.jpg'
import menu from '../assets/menu.png'
import profile from '../assets/profile.png'
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from 'aos'
import axios from 'axios'
import 'aos/dist/aos.css'

export default function AllClubs(){
    const navigate=useNavigate()
    const [isOpen,setIsOpen]=useState(false)
    
   async function clickFunction(){
       try{
        const res1=await axios.get('https://clubsphere-production.up.railway.app/login/viewUserProfile',{
          withCredentials:true }
      )
       console.log(res1)
    
      navigate('/viewUserProfile')
    }
      catch(e){
        try{
        const res2=await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/viewExecutiveProfile',{
          withCredentials:true }
      )
     
      navigate('/adminPower')
    }
    catch(e2){
      console.log("Both request failed",e,e2)
    }
      }
    }
   useEffect(() => {
  AOS.init({ delay: 500, once: true });
}, []);
    return(
        <>
        <div style={{fontFamily: "'Playwrite HU', serif"}} class="hover:cursor-pointer relative bg-black w-full min-h-screen ">
           <button onClick={()=>navigate('/')}className="absolute z-50 bg-[#B026FF] text-white p-2 rounded-xl top-10 left-10 hover:bg-zinc-800
">Back</button>
          <button 
  onClick={() => navigate('/chat')} 
  className="fixed bg-[#9FB3DF] text-red p-2 rounded-xl bottom-10 right-10 z-50"
>
  🧠Chat
</button>


  
 
    <div className="flex flex-row items-center gap-6 justify-end">
      <div className="relative inline-block mt-4 text-left md:mt-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-600 text-white px-2 py-2 rounded-md hover:cursor-pointer"
        >
          <img src={menu} alt="menu" className="w-[30px] h-[30px]" />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 flex flex-col bg-zinc-900 shadow-md rounded w-48 z-50 mt-1">
            <a href="/announcement" className="block px-4 py-2 hover:bg-zinc-700 text-white">
              Announcements
            </a>
            <a href="/viewPost" className="block px-4 py-2 hover:bg-zinc-700 text-white">
              Posts
            </a>
          </div>
        )}
      </div>

  


<div className="relative inline-block text-left rounded-full mr-14 md:mt-2 mt-4">
  <button onClick={clickFunction} className="bg-white px-2 py-2 rounded-full hover:cursor-pointer">
    <img src={profile} alt="profile" className="w-[30px] h-[30px]" />
  </button>
</div>

</div>


 

            <h1 className="absolute text-2xl md:text-4xl text-[#B026FF] text-center mt-7 md:left-2/5 left-1/4">OUR CLUBS</h1> 
           <div className=" pb-2.5 flex gap-4 md:flex-row md:flex-wrap md:justify-center  flex-col transition-transform duration-300 transform translate-z-[200px]   ">
             <div data-aos="left" className="  w-[300px] h-[420px] mt-28 mr-30 md:ml-12 ml-14 border-black-300 rounded-xl shadow-blue-600 shadow-lg bg-gray-900  overflow-hidden  hover:shadow-blue-600   hover:translate-1.5 ">
           <img className="w-full h-80 object-cover" src={tech} loading="lazy" alt="..." />
           <h1 className="text-xl text-center text-white mt-4">TECH CLUB</h1>
           <button  onClick={()=>navigate('/techHome')} style={{
  fontFamily: 'Arial, Helvetica, sans-serif'}}className="text-blue-800 ml-32 mt-2 font-bold bg-white rounded-xl px-2 py-2 hover:text-black hover:bg-green-300">Explore</button>
        </div>
            <div  data-aos="fade-right" className="  w-[300px] h-[420px] md:mt-28 mt-14  mr-30 md:ml-12 ml-14 border-black-300 rounded-xl shadow-amber-800 shadow-lg bg-gray-900  overflow-hidden  hover:shadow-amber-800   hover:translate-1.5 ">
           <img className="w-full h-80 object-cover" src={cfac} loading="lazy" alt="..." />
           <h1 className="text-xl text-center text-white mt-4">CFAC CLUB</h1>
           <button   onClick={()=>navigate('/cfacHome')} style={{
  fontFamily: 'Arial, Helvetica, sans-serif'}}className="text-blue-800 ml-28 mt-2 font-bold bg-white rounded-xl px-2 py-2 hover:text-black   hover:bg-green-300">Explore</button>
        </div>
        
        <div data-aos="fade up" className="  w-[300px] h-[420px] md:mt-28 mr-30 md:ml-12 mt-14 ml-14 border-black-300 rounded-xl shadow-pink-400 shadow-lg bg-gray-900  overflow-hidden  hover:shadow-pink-400   hover:translate-1.5 ">
           <img className="w-full h-80 object-cover" src={lite} loading="lazy" alt="..." />
           <h1 className="text-xl text-center text-white mt-4">LITERARY CLUB</h1>
           <button onClick={()=>navigate('/liteHome')} style={{
  fontFamily: 'Arial, Helvetica, sans-serif'}}className="text-blue-800 ml-32 mt-2 font-bold bg-white rounded-xl px-2 py-2 hover:text-black hover:bg-green-300">Explore</button>
  
        </div>
        <div data-aos="fade-left" className="  w-[300px] h-[420px] md:mt-28 md:mb-8 mr-30 mt-14 md:ml-12 ml-14  border-black-300 rounded-xl shadow-white shadow-lg bg-gray-900  overflow-hidden  hover:shadow-white   hover:translate-1.5 ">
           <img className="w-full h-80 object-cover" src={photo} loading="lazy" alt="..." />
           <h1 className="text-xl text-center text-white mt-4">PHOTOGRAPHY CLUB</h1>
           <button  onClick={()=>navigate('/photoHome')} style={{
  fontFamily: 'Arial, Helvetica, sans-serif'}}className="text-blue-800 ml-32 mt-2 font-bold bg-white rounded-xl px-2 py-2 hover:text-black hover:bg-green-300">Explore</button>
        </div>
        <div data-aos="fade-right" className="  w-[300px] h-[420px] md:mt-28 mb-8 mr-30  mt-14 md:ml-12 ml-14 border-black-300 rounded-xl shadow-green-500 shadow-lg bg-gray-900  overflow-hidden  hover:shadow-green-500   hover:translate-1.5 ">
           <img className="w-full h-80 object-cover" src={sports} loading="lazy" alt="..." />
           <h1 className="text-xl text-center text-white mt-4">SPORTS CLUB</h1>
           <button  onClick={()=>navigate('/sportsHome')} style={{
  fontFamily: 'Arial, Helvetica, sans-serif'}}className="text-blue-800 ml-32 mt-2 mb-4 font-bold bg-white rounded-xl px-2 py-2 hover:text-black hover:bg-green-300">Explore</button>
        </div>
        </div >
        
        </div>
        </>
    )

}
