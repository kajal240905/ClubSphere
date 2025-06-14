import React from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'

export default function PhotoEvents(){
    const navigate=useNavigate()
    const [Events,setEvents] = useState([])
     const handleClick = async()=>{
        try{
       const res1 = await axios.get('https://clubsphere-production.up.railway.app/login/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'photography'
    }
    
       })
       setEvents(res1.data);
    }
    catch(err1){
        try{
  const res2= await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/getAllEvents',{
        withCredentials:'true',
        params:{
            clubName:'photography'
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
    <div  style={{ fontFamily: "'Playwrite HU', serif"}}  className=' flex bg-[#B2C9AD] min-h-screen w-full items-center  text-blue-900 text-center flex-col pb-10'>
             <button  onClick={()=>navigate('/photoHome')} className=' mt-3 rounded-xl mr-4 self-end p-2 bg-[#690B22]  text-pink-100'>Back</button>
       <h1  className='md:text-5xl text-4xl mt-6 text-[#690B22]'>EVENTS</h1>
    
        <div>
         { [...Events].reverse().map((event,index)=>(
               <div data-aos="fade-down"
               data-aos-delay={index*50}
               key={index} className='bg-[#91AC8F] text-[#690B22] w-[60vw]  scroll-hidden overflow-y-scroll mt-10 h-[30vh] rounded-xl shadow-md shadow-[#690B22] translate-transform 
               duration-300 transform translate-z-[200] hover:scale-105 hover:bg-gray-300'>
                <div className='text-xl pt-4'>{event.name}</div>
                <div className='mt-2 text-black'>{event.description}</div>
                <div className=' mt-2 '><strong>Head</strong>-{event.eventHead}</div>
                <div className='mt-2 text-black'>Registration Fee-{event.registrationFee}₹</div>
                 <div className="text-blue-900 text-sm pt-1 md:pt-2">
                {new Date(event.eventDate).toLocaleDateString()} at {event.eventTime}
                   </div>
                <button onClick={()=>navigate('/payment',{
                   state:{fee:event.registrationFee,eventName:event.name}
                })} className="bg-[#690B22] rounded-xl mt-2 text-white p-2 mb-4">Register Now</button>
                 </div> 
               

            
      ))  }
        </div>

    </div>



    </>
)
    
}
