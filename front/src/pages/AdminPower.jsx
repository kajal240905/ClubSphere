import react from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import AOS from 'aos'
import "aos/dist/aos.css"


export default function AdminPower(){
   const navigate =useNavigate()
   useEffect(()=>{
    AOS.init({delay:1000,once:true})
   },[])
    return(
        <>
        <div style={{ fontFamily: "'Poppins', sans-serif" }}  className="bg-zinc-700  hover:cursor-pointer text-[#B026FF] min-h-screen w-full flex flex-col items-center">
          
            <button  onClick={()=>navigate('/allClubs')} className=" ml-8 mt-4  rounded-xl p-2 text-white bg-[#B026FF] self-start">Explore Clubs</button>
           
           <h2 className="md:text-3xl font-semibold text-center mt-5 text-[#B026FF] p-2">
  Welcome, Admin! Your dashboard is ready — let’s make things happen 🚀
</h2>
        <div className="flex flex-wrap align-center md:ml-35 md:mt-20 "> 
        <div data-aos="fade-left" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] hover:bg-[#B026FF] hover:scale-105 hover:text-black
 w-[40vw] h-[10vh] text-center text-xl pt-5 rounded-xl md:mt-0 mt-12  md:mr-8 space-x-8" onClick={()=>navigate('/addEvent')}>Add an event</div>
        <div data-aos="fade-right" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] hover:bg-[#B026FF] hover:text-black hover:scale-105 w-[40vw] h-[10vh] text-center text-xl pt-5 rounded-xl mt-12 md:mt-0 md:mr-8" onClick={()=>navigate('/addAnnounce')}>Add an announcement</div>
        <div data-aos="fade-left" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] hover:bg-[#B026FF] hover:scale-105 hover:text-black w-[40vw] h-[10vh] text-center text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/addItems')}>Add item</div>
        <div data-aos="fade-right" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] hover:bg-[#B026FF] hover:scale-105 hover:text-black w-[40vw] h-[10vh] text-center text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/issueItem')}>Issue item</div>
        <div data-aos="fade-left" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] w-[40vw] h-[10vh] hover:scale-105 text-center hover:bg-[#B026FF] hover:text-black text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/returnItem')}>Return item</div>
        <div data-aos="fade-right" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] w-[40vw] h-[10vh] hover:scale-105 text-center hover:bg-[#B026FF] hover:text-black text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/removeItem')}>Delete item</div>
        <div data-aos="fade-left" className="bg-zinc-900 md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] w-[40vw] h-[10vh] hover:scale-105 text-center hover:bg-[#B026FF] hover:text-black text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/addPost')}>Add Post</div>
        <div data-aos="fade-right"className="bg-zinc-900  md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] w-[40vw] h-[10vh] hover:scale-105 text-center hover:bg-[#B026FF] hover:text-black text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/addMember')}>Add Member</div>
        <div data-aos="fade-right"className="bg-zinc-900  md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] w-[40vw] h-[10vh] hover:scale-105 text-center hover:bg-[#B026FF] hover:text-black text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/removeMember')}>Remove Member</div>
        <div data-aos="fade-right"className="bg-zinc-900  md:ml-0 ml-7 shadow-[0_0_12px_#B026FF] w-[40vw] h-[10vh] hover:scale-105 text-center hover:bg-[#B026FF] hover:text-black text-xl pt-5 rounded-xl mt-12 md:mr-8" onClick={()=>navigate('/viewParticipants')}>View Participants</div>
        <div className='md:text-3xl  md:py-30  text-[#B026FF] font-semibold py-12 px-4 flex flex-col justify-center items-center text-center  md:ml-55 '>
            
        <h2 className=''>Start a video conference and connect with others</h2>
        <button className="md:text-xl bg-[#B026FF] mt-2 text-white p-2 rounded-xl">Click here </button>
        
        </div>
       </div>
        </div>
        </>
 
    )
}