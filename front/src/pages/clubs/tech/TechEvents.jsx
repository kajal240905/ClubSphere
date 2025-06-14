import React from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function TechEvents(){
    const navigate=useNavigate()
    const [Events,setEvents] = useState([])
   const handleClick = async()=>{
        try{
       const res1 = await axios.get('http://localhost:3000/login/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'tech'
    }
    
       })
       setEvents(res1.data);
    }
    catch(err1){
        try{
  const res2= await axios.get('http://localhost:3000/loginExecutive/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'tech'
    }
    
       })
       setEvents(res2.data);
        }
        catch(err2){
    console.log("Error" ,err1,err2)
        }
    }
    }
    useEffect(()=>{
       handleClick();
       AOS.init({duration:1000,once:true})
       
    },[])
    
return(
    <>
    <div  style={{ fontFamily: "'Poppins', sans-serif"}} className=' flex bg-zinc-900 min-h-screen w-full items-center  text-[#00ffee] text-center flex-col '>
             <button onClick={()=>navigate('/TechHome')} style={{ fontFamily: "'Orbitron', sans-serif" }} className=' rounded-xl mr-4 self-end p-2 bg-[#00ffee] mt-4  text-black'>Back</button>
       <h1 style={{ fontFamily: "'Orbitron', sans-serif" }} className='md:text-5xl mt-6 text-2xl'>TECH EVENTS</h1>
    
        <div className="mb-10">
         {  [...Events].reverse().map((event,index)=>(
               <div data-aos="fade-down"
               data-aos-delay={index*50}
               key={index} className='bg-zinc-700 text-[#00ffee] w-[60vw] mt-10 h-[30vh] rounded-xl shadow-md shadow-[#00ffee] translate-transform 
               duration-300 transform translate-z-[200] hover:scale-105 hover:bg-zinc-600 overflow-y-auto'>
                <div style={{ fontFamily: "'Orbitron', sans-serif" }} className='text-xl pt-4'>{event.name}</div>
                <div className='mt-2 text-white'>{event.description}</div>
                <div className=' mt-2 '><strong>Head</strong>-{event.eventHead}</div>
                 <div className="text-white text-sm pt-1 md:pt-2">
  {new Date(event.eventDate).toLocaleDateString()} at {event.eventTime}
</div>
                <div className='mt-2 text-white'>Registration Fee-{event.registrationFee}₹</div>
   <button onClick={()=>navigate('/payment',{
                   state:{fee:event.registrationFee,eventName:event.name}
                })} 
   
    style={{ fontFamily: "'Orbitron', sans-serif" }} className="bg-[#00ffee] rounded-xl mt-2 text-black  mb-4 p-2">Register</button>
                 </div> 
               

            
      ))  }
        </div>

    </div>



    </>
)
    
}