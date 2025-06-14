import React from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function LiteEvents(){
    const navigate=useNavigate()
    const [Events,setEvents] = useState([])
    const handleClick = async()=>{
        try{
       const res1 = await axios.get('https://clubsphere-production.up.railway.app/login/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'literary'
    }
    
       })
       setEvents(res1.data);
    }
    catch(err1){
        try{
  const res2= await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'literary'
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
    <div  style={{fontFamily: "'Playwrite HU', serif"}} className=' flex bg-[#F2EFE7] min-h-screen w-full items-center  text-blue-900 text-center flex-col pb-6'>
             <button  onClick={()=>navigate('/liteHome')} className=' rounded-xl self-end m-2 p-3 bg-[#4F1C51]   text-white'>Back</button>
       <h1  className='md:text-4xl text-2xl mt-6 text-[#4F1C51] pb-12'>EVENTS</h1>
    
        <div>
         { [...Events].reverse().map((event,index)=>(
               <div data-aos="fade-down"
               data-aos-delay={index*50}
               key={index} className='bg-blue-100 text-[#4F1C51] w-[60vw] mb-10  pb-10 h-[30vh] rounded-xl shadow-md shadow-[#4F1C51] translate-transform 
               duration-300 transform translate-z-[200] hover:scale-105 hover:bg-white overflow-y-auto md:overflow-none'>
                <div className='text-xl pt-4'>{event.name}</div>
                <div className='mt-2 text-black'>{event.description}</div>
                <div className=' mt-2 '><strong>Head</strong>-{event.eventHead}</div>
                <div className='mt-2 text-black'>Registration Fee-{event.registrationFee}₹</div>
                 <div className="text-blue-900 text-sm pt-1 md:pt-2">
  {new Date(event.eventDate).toLocaleDateString()} at {event.eventTime}
</div>
                <button onClick={()=>navigate('/payment',{
                   state:{fee:event.registrationFee,eventName:event.name}
                })}  className="bg-[#4F1C51] rounded-xl mt-2 pb-6 text-white p-2 mb-4">Register Now</button>
                 </div> 
               

            
      ))  }
        </div>

    </div>



    </>
)
    
}
