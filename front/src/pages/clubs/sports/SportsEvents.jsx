import React from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function SportsEvents(){
    const navigate=useNavigate()
    const [Events,setEvents] = useState([])
     const handleClick = async()=>{
        try{
       const res1 = await axios.get('https://clubsphere-production.up.railway.app/login/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'sports'
    }
    
       })
       setEvents(res1.data);
    }
    catch(err1){
        try{
  const res2= await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'sports'
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
    <div  style={{ fontFamily: "'Playwrite HU', serif" }}  className=' flex bg-[#EBFFD8] min-h-screen w-full items-center  text-[#41644A] text-center flex-col '>
             <button  onClick={()=>navigate('/sportsHome')} className=' rounded-xl mr-4 self-end p-2 bg-[#994556] mt-4  text-green-200'>Back</button>
       <h1  className='md:text-4xl  text-2xl mt-6 text-[#994556] '>SPORTS EVENTS</h1>
    
        <div>
         { [...Events].reverse().map((event,index)=>(
               <div data-aos="fade-down"
               data-aos-delay={index*50}
               key={index} className='bg-[#B0DB9C] text-[#994556] md:w-[60vw]  w-[75vw]  h-[35vh] mt-10 md:h-[30vh]  rounded-xl shadow-md shadow-[#994556] translate-transform 
               duration-300 transform translate-z-[200] hover:scale-105 hover:bg-green-200 overflow-y-auto'>
                <div className='text-xl pt-4'>{event.name}</div>
                <div className='mt-2 text-black'>{event.description}</div>
                <div className=' mt-2 '><strong>Head</strong>-{event.eventHead}</div>
                 <div className='mt-2 text-black'>Registration Fee-{event.registrationFee}₹</div> 
               <div className="text-black text-sm pt-1 md:pt-2">
  {new Date(event.eventDateTime).toLocaleDateString()} at {new Date(event.eventDateTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
</div>

                <button onClick={()=>navigate('/payment',{
                   state:{fee:event.registrationFee,eventName:event.name}
                })} className="bg-[#994556] rounded-xl mt-2 text-white mb-4 p-2">Register Now</button>
                 </div> 
               

            
      ))  }
        </div>

    </div>



    </>
)
    
}
