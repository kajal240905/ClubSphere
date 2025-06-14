
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Announcement(){
    
    const navigate=useNavigate()
    const [announces,setAnnounce]=useState([])
   async function handleClick(){
        try{
            const response1=await axios.get('https://clubsphere-production.up.railway.app/login/getAllAnnouncement',{
            withCredentials: 'true',
                
        
            })
            
            setAnnounce(response1.data)
        }
        catch (e) {

            try{

                  const response2=await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/getAllAnnouncement',{
            withCredentials: 'true',
               
            })
            
            setAnnounce(response2.data)
         
            }
            catch(error){
    console.log('Both request failed',e,error)
            }
  
  
  }
}

    
    
    useEffect(()=>{
       handleClick()
       AOS.init({delay:1000,once:true})
    },[])
    return(
        <>
        <div style={{ fontFamily: "'Playwrite HU', serif"}} className="bg-pink-100 min-h-screen  w-full flex  flex-col justify-start text-center items-center
        "><button onClick={()=>navigate('/allClubs')}  className="bg-blue-900 self-end text-pink-200 mt-12 mr-12 p-2 rounded-xl">Back</button>
            <h1 className="md:text-4xl text-center mt-4 mb-16  text-blue-900 font-bold text-2xl" 
           >ANNOUNCEMENTS</h1>
            
         <div className="">
          {
              [...announces].reverse().map((announce,index)=>(
                
             
                <section  
                data-aos="fade-down"
                data-aos-delay={index*50}
                
            
                key ={index} className="mb-12 md:w-[70vw] w-[90vw] overflow-y-auto h-[200px] bg-pink-200 text-pink-600 rounded-xl md:rounded-full shadow-md shadow-blue-600
                hover:bg-pink-100 transition-transform  duration-300 transform translate-z-[200px] hover:scale-105 hover:shadow-md ">
        <div  className="md:pt-12  pt-6 text-md md:text-2xl"
        >{announce.title.toUpperCase()}</div>
       
        <div className="text-blue-900 text-sm pt-1 md:pt-2">{announce.description}</div>
        <div className="text-blue-900 text-sm pt-1 md:pt-2">{new Date(announce.date).toLocaleString()}</div>

        
            </section>
            ))
          }

            
         </div>
        </div>
        </>

    )
}
