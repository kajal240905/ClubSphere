import React from "react";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import lite2 from '../../../assets/lite2.png'
import lite1 from '../../../assets/lite1.png'
import l1 from '../../../assets/lt1.JPG'
import l2 from '../../../assets/lt2.JPG'
import l3 from '../../../assets/lt3.jpg'
import l4 from '../../../assets/lt4.jpg'
import l5 from '../../../assets/lt5.jpg'



export default function AboutLite() {
  const navigate = useNavigate();
  const [members, setMember] = useState([]);

const handleClick = async()=>{
            try{
             const response1=await axios.get('https://clubsphere-production.up.railway.app/login/getMember',{
              withCredentials: true,
                params:{
                    club:'literary'
                },
               }) 
               console.log(response1.data)
               setMember(response1.data)
               
            }
            catch(e1){
             try{
              const response2=await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/getMember',{
              withCredentials: true,
                params:{
                    club:'literary'
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

  useEffect(() => {
    handleClick();
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div  style={{fontFamily: "'Playwrite HU', serif"}}  className="flex flex-col items-center justify-center min-h-screen bg-[#F2EFE7] relative p-6">
      <button onClick={() => navigate('/liteHome')} className="bg-[#4f1c51] text-white p-2 rounded-2xl self-end mb-4">Back</button>
      <h1 className="font-extrabold text-[#4f1c51] text-xl md:text-3xl  m-2 md:mb-8 text-center">
        ABOUT LITERARY CLUB
      </h1>

      <div className="flex mt-5 flex-col md:flex-row items-center bg-blue-100 text-md shadow-2xl rounded-lg p-6 md:p-10 w-full max-w-6xl" data-aos="fade-left">
        <div className="md:w-2/3">
          <p className="text-justify text-gray-700">
            The <strong>Literary Club</strong> is a haven for all lovers of words. Whether it's writing, debating, poetry, or storytelling — our club nurtures creativity, sharpens expression, and builds confidence through the beauty of language.
          </p>
          <p className="text-justify text-gray-700 mt-4">
            We regularly conduct open mics, creative writing contests, debates, and workshops. If you're passionate about literature or simply enjoy sharing ideas, the Literary Club is your stage.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0 md:ml-10">
          <img
            src={lite1}
            alt="Literary Club"
            className="rounded-full h-40 w-40 object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="flex mt-5 bg-blue-100 flex-col md:flex-row items-center shadow-2xl rounded-lg p-6 md:p-10 w-full max-w-6xl" data-aos="fade-right">
        <div className="md:w-2/3">
          <p className="text-justify text-lg text-gray-800"><strong>Our Vision</strong></p>
          <p className="text-justify text-md text-gray-800 mt-4">
            "At the Literary Club, we believe words have the power to change minds and move hearts. Through every story told and every poem penned, we build a space where imagination breathes and voices are heard."
          </p>
        </div>
        <div className="md:w-1/3 mt-5 flex justify-center md:mt-0 md:ml-10">
          <img
            src={lite2}
            alt="Literary Club"
            className="rounded-full h-40 w-40 object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="bg-pink-150 py-12 mt-3 px-6 w-full">
        <h2 className="text-3xl text-[#4f1c51] font-bold text-center mb-10">
          Meet Our Team
        </h2>

        <div className="w-[90vw] flex justify-center items-center text-center">
          <div className="flex flex-wrap md:ml-24  mr-12 justify-center">
            {members.map((member, index) => (
              <div
                key={index}
                style={{ perspective: "800px" }}
                className="hover:bg-blue-200 shadow-blue-100 w-[240px] h-[180px] p-6 m-10 bg-white rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105 translate-z-[200px] hover:shadow-xl"
                data-aos="zoom-out"
                data-aos-delay={index * 50}
              >
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm mt-1 text-green-500">{member.branch.toUpperCase()}</p>
                <p className="text-sm mt-1 text-blue-500">{member.role?.charAt(0).toUpperCase()+
                  member.role?.slice(1).toLowerCase()}</p>
                 <p className="text-md mt-1 text-green-800">Contact:</p>
                 <p className="text-md mt-1 text-black hover:underline">{member.email}</p>
              </div>
            ))}
          </div>
        </div>
        <h1  className="md:text-4xl text-center text-3xl mt-20">🔍 Backtrace Moments </h1>
      <div className="flex overflow-x-auto space-x-4 p-4 ">
        {[l1,l2,l3,l4,l5].map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Image ${index + 1}`}
            className="w-[80vw] md:w-[40vw] h-[40vh] object-cover rounded-xl snap-start shrink-0"
          />
        ))}
      </div>
      </div>
      
    </div>
  );
}
