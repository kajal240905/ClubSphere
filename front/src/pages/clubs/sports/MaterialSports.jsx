
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function MaterialsSports(){
    
    const navigate=useNavigate()
    const [materials,setMaterial]=useState([])
       async function handleClick(){
        try{
       const res1 = await axios.get('http://localhost:3000/login/getItem',{
        withCredentials:'true',
        params:{
            clubQuery:'sports'
    }
    
       })
       setMaterial(res1.data);
    }
    catch(err1){
        try{
  const res2= await axios.get('http://localhost:3000/loginExecutive/getItem',{
        withCredentials:'true',
        params:{
            clubQuery:'sports'
    }
    
       })
       setMaterial(res2.data);
        }
        catch(err2){
    console.log("Error" ,err1,err2)
        }
    }
    }
    
    useEffect(()=>{
        
       handleClick()
       AOS.init({duration:1000,once:true})
    },[])
    return(
        <>
        <div style={{ fontFamily: "'Playwrite HU', serif" }} className="bg-[#EBFFD8] min-h-screen w-full flex  flex-col justify-start text-center items-center 
        "><button onClick={()=>navigate('/sportsHome')} style={{ fontFamily: "'Orbitron', sans-serif" }} className="bg-[#994556] self-end text-black mr-12 mt-4 p-2 rounded-xl">Back</button>
            <h1 className="md:text-4xl text-center md:mt-2 md:mb-16  mb-6 mt-1 text-xl text-[#994556]" 
         >SPORTS INVENTORY</h1>
            
<div className="flex flex-col md:flex-row md:flex-wrap">
          {
              materials.map((material,index)=>(
                
             
                <section  
                data-aos="fade-down"
                data-aos-delay={index*50}
                
            
                key ={index} className="md:ml-12 ml-3 mb-12 md:w-[20vw] md:h-[12vw] bg-[#B0DB9C] text-[#994556] rounded-xl shadow-md shadow-[#994556]
                hover:bg-green-100 transition-transform  w-[60vw] h-[8vh] duration-300 transform translate-z-[200px] hover:scale-105 hover:shadow-md">
        <div className="md:pt-12  pt:5 md:text-xl text-sm mt-2"
        >{material.name.toUpperCase()}</div>
       
        <div className="text-blue-900 md:pt-2"><strong> Available Quantity-</strong>{material.quantity}</div>
        

        
            </section>
            ))
          }

            
         </div>
        </div>
        </>

    )
}