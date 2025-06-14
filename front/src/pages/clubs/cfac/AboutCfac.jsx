import React from "react";
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import cfac2 from '../../../assets/cfac2.png'
import c1 from '../../../assets/c1.JPG'
import c2 from '../../../assets/c2.JPG'
import c3 from '../../../assets/c3.JPG'
import c4 from '../../../assets/c4.JPG'
import c5 from '../../../assets/c5.JPG'
import c6 from '../../../assets/c6.jpg'

export default function AboutCfac() {
     const navigate = useNavigate();
     const [members,setMember]=useState([])
       const handleClick = async()=>{
            try{
             const response1=await axios.get('http://localhost:3000/login/getMember',{
              withCredentials: true,
                params:{
                    club:'cfac'
                },
               }) 
               console.log(response1.data)
               setMember(response1.data)
               
            }
            catch(e1){
             try{
              const response2=await axios.get('http://localhost:3000/loginExecutive/getMember',{
              withCredentials: true,
                params:{
                    club:'cfac'
                },
               }) 
               console.log(response2.data)
               setMember(response2.data)
             }
             catch(e2){
              console.log("Both requests failed")
             }
            }

        }
        useEffect(()=>{
          handleClick()
          AOS.init({duration:1000,once:true})
        
        },[])
 
  return (
    <div style={{fontFamily: "'Playwrite HU', serif"}} className="flex flex-col  items-center justify-center min-h-screen bg-pink-100 relative p-2">
      
     <button onClick={()=>navigate('/cfacHome')} className="bg-blue-900 text-white  p-2 rounded-2xl self-end mb-4">Back</button>
      <h1  className="font-extrabold text-blue-900 text-3xl mb-8 text-center">
        ABOUT CFAC 
      </h1>

      <div  className="flex mt-5  flex-col md:flex-row  items-center bg-white shadow-2xl rounded-lg p-6 md:p-10 w-full max-w-6xl"
      data-aos="fade-left">
        
        
        <div className="md:w-2/3">
          <p className="text-justify text-gray-700">
            The <strong>CFAC Club</strong> is a vibrant community dedicated to fostering creativity, innovation, and collaboration among its members. Our mission is to provide a platform for individuals to explore their passions, share knowledge, and develop new skills in a supportive environment. We organize workshops, events, and projects that encourage personal growth and professional development.
          </p>
          <p className="text-justify  text-gray-700 mt-4">
            Whether you're an artist, technologist, or simply curious about the world, CFAC Club welcomes you to join us in our journey of discovery and creativity.
          </p>
        </div>

        
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0 md:ml-10">
          <img
            src="https://th.bing.com/th/id/OIP.a7E8RiFqtnL1FIbHrpwO5QHaFe?w=210&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="CFAC Club"
            className="rounded-full h-40 w-40 object-cover shadow-lg"
          /> 
        </div>
      </div>
      
      <div className="flex mt-5 bg-white flex-col md:flex-row items-center shadow-2xl rounded-lg p-6 md:p-10 w-full max-w-6xl"
      data-aos="fade-right">
        
        
        <div className="md:w-2/3 ">
          <p className="text-justify text-lg text-gray-700"> <strong>What We Deliver</strong> </p>
          
          <p className="text-justify  text-lg text-gray-700 mt-4">
          "At CFAC, we believe that every brushstroke, every sketch, and every idea holds the power to inspire — we are a vibrant community where creativity thrives, culture is celebrated, and artistic expression becomes a shared journey of discovery and impact."
          </p>
        </div>

        
        <div className="md:w-1/3 mt-5 flex justify-center  md:mt-0 md:ml-10">
         <img
            src={cfac2}
            alt="CFAC Club"
            className="rounded-full h-40 w-40 object-cover shadow-lg"
          />
        </div>
    
      </div>
        <div className="bg-pink-150 py-12 mt-3 px-6 w-full">
      <h2 className="text-3xl text-blue-900 font-bold text-center mb-10">
        Meet Our Team
      </h2>

      <div className="w-[90vw] flex justify-center items-center text-center">
          <div className="flex flex-wrap md:ml-24 justify-center">
            {members.map((member, index) => (
              <div
                key={index}
                style={{ perspective: "800px" }}
                className="hover:bg-pink-100 shadow-pink-500 w-[240px] h-[180px] p-6 m-10 bg-white rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105 translate-z-[200px] hover:shadow-xl"
                data-aos="zoom-out"
                data-aos-delay={index * 50}
              >
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm mt-1 text-green-700">{member.branch.toUpperCase()}</p>
                <p className="text-sm mt-1 text-blue-500">{member.role?.charAt(0).toUpperCase()+
                  member.role?.slice(1).toLowerCase()}</p>
                 <p className="text-md mt-1 text-green-800">Contact:</p>
                 <p className="text-md mt-1 text-black hover:underline">{member.email}</p>
                 
              </div>
            ))}
          </div>
        </div>
    


<h1  className="md:text-4xl text-center mt-20 text-3xl">🔍 Backtrace Moments </h1>
<div className="flex overflow-x-auto space-x-4 m-4 mb-12 ">
  {[c1, c2, c3, c4, c5,c6].map((imgSrc, index) => (
    <img
      key={index}
      src={imgSrc}
      alt={`Image ${index + 1}`}
      className="w-[80vw] md:w-[40vw] h-[50vh] object-cover rounded-xl snap-start shrink-0"
    />
  ))}
</div>
</div>
     </div>
   
  );
}