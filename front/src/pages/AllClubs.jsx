
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
        const res1=await axios.get('https://clubsphere-production.up.railway.app/login/viewUserProfile',{ withCredentials:true })
        navigate('/viewUserProfile')
      } catch(e){
        try{
        const res2=await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/viewExecutiveProfile',{ withCredentials:true })
        navigate('/adminPower')
        } catch(e2){
          console.log("Both request failed",e,e2)
        }
      }
    }

   useEffect(() => {
      AOS.init({ delay: 500, once: true });
   }, []);

   return(
        <>
        <div style={{fontFamily: "'Playwrite HU', serif"}} className="relative bg-black w-full min-h-screen">
           <button onClick={()=>navigate('/')} className="absolute z-50 bg-[#B026FF] text-white p-2 rounded-xl top-4 left-4 hover:bg-zinc-800">Back</button>

           <button onClick={() => navigate('/chat')} className="fixed bg-[#9FB3DF] text-red p-2 rounded-xl bottom-4 right-4 z-50">🧠Chat</button>

           <div className="flex flex-row items-center gap-6 justify-end p-4">
              <div className="relative inline-block text-left">
                <button onClick={() => setIsOpen(!isOpen)} className="bg-purple-600 text-white px-2 py-2 rounded-md">
                  <img src={menu} alt="menu" className="w-[30px] h-[30px]" />
                </button>
                {isOpen && (
                  <div className="absolute top-full left-0 flex flex-col bg-zinc-900 shadow-md rounded w-48 z-50 mt-1">
                    <a href="/announcement" className="block px-4 py-2 hover:bg-zinc-700 text-white">Announcements</a>
                    <a href="/viewPost" className="block px-4 py-2 hover:bg-zinc-700 text-white">Posts</a>
                  </div>
                )}
              </div>

              <div className="relative inline-block text-left rounded-full">
                <button onClick={clickFunction} className="bg-white px-2 py-2 rounded-full">
                  <img src={profile} alt="profile" className="w-[30px] h-[30px]" />
                </button>
              </div>
           </div>

           <h1 className="text-2xl md:text-4xl text-[#B026FF] text-center mt-7">OUR CLUBS</h1> 

           <div className="flex flex-wrap justify-center gap-16 px-4 pb-8">
             
             <div data-aos="left" className="w-full max-w-[300px] h-[420px] mt-10 border-black-300 rounded-xl shadow-blue-600 shadow-lg bg-gray-900 overflow-hidden hover:shadow-blue-600 hover:scale-105 transition-transform duration-300 mx-auto">
               <img className="w-full h-80 object-cover" src={tech} loading="lazy" alt="..." />
               <h1 className="text-xl text-center text-white mt-4">TECH CLUB</h1>
               <button onClick={()=>navigate('/techHome')} className="text-blue-800 mx-auto block mt-2 font-bold bg-white rounded-xl px-4 py-2 hover:text-black hover:bg-green-300">Explore</button>
             </div>

             <div data-aos="fade-right" className="w-full max-w-[300px] h-[420px] mt-10 border-black-300 rounded-xl shadow-amber-800 shadow-lg bg-gray-900 overflow-hidden hover:shadow-amber-800 hover:scale-105 transition-transform duration-300 mx-auto">
               <img className="w-full h-80 object-cover" src={cfac} loading="lazy" alt="..." />
               <h1 className="text-xl text-center text-white mt-4">CFAC CLUB</h1>
               <button onClick={()=>navigate('/cfacHome')} className="text-blue-800 mx-auto block mt-2 font-bold bg-white rounded-xl px-4 py-2 hover:text-black hover:bg-green-300">Explore</button>
             </div>

             <div data-aos="fade-up" className="w-full max-w-[300px] h-[420px] mt-10 border-black-300 rounded-xl shadow-pink-400 shadow-lg bg-gray-900 overflow-hidden hover:shadow-pink-400 hover:scale-105 transition-transform duration-300 mx-auto">
               <img className="w-full h-80 object-cover" src={lite} loading="lazy" alt="..." />
               <h1 className="text-xl text-center text-white mt-4">LITERARY CLUB</h1>
               <button onClick={()=>navigate('/liteHome')} className="text-blue-800 mx-auto block mt-2 font-bold bg-white rounded-xl px-4 py-2 hover:text-black hover:bg-green-300">Explore</button>
             </div>

             <div data-aos="fade-left" className="w-full max-w-[300px] h-[420px] mt-10 border-black-300 rounded-xl shadow-white shadow-lg bg-gray-900 overflow-hidden hover:shadow-white hover:scale-105 transition-transform duration-300 mx-auto">
               <img className="w-full h-80 object-cover" src={photo} loading="lazy" alt="..." />
               <h1 className="text-xl text-center text-white mt-4">PHOTOGRAPHY CLUB</h1>
               <button onClick={()=>navigate('/photoHome')} className="text-blue-800 mx-auto block mt-2 font-bold bg-white rounded-xl px-4 py-2 hover:text-black hover:bg-green-300">Explore</button>
             </div>

             <div data-aos="fade-right" className="w-full max-w-[300px] h-[420px] mt-10 border-black-300 rounded-xl shadow-green-500 shadow-lg bg-gray-900 overflow-hidden hover:shadow-green-500 hover:scale-105 transition-transform duration-300 mx-auto">
               <img className="w-full h-80 object-cover" src={sports} loading="lazy" alt="..." />
               <h1 className="text-xl text-center text-white mt-4">SPORTS CLUB</h1>
               <button onClick={()=>navigate('/sportsHome')} className="text-blue-800 mx-auto block mt-2 mb-4 font-bold bg-white rounded-xl px-4 py-2 hover:text-black hover:bg-green-300">Explore</button>
             </div>

           </div>
        </div>
        </>
    )
}
