import React from "react";
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import sportsImg from '../../../assets/sports1.png'; 
import sports2 from '../../../assets/sports2.png'; 
import s1 from '../../../assets/s1.jpg'
import s2 from '../../../assets/s2.jpg'
import s3 from '../../../assets/s3.jpg'
import s4 from '../../../assets/s4.JPG'
import s5 from '../../../assets/s5.jpg'
import s6 from '../../../assets/s6.jpg'

export default function AboutSports() {
  const navigate = useNavigate();
  const [members, setMember] = useState([]);

const handleClick = async()=>{
            try{
             const response1=await axios.get('http://localhost:3000/login/getMember',{
              withCredentials: true,
                params:{
                    club:'sports'
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
                    club:'sports'
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
    <div style={{ fontFamily: "'Playwrite HU', serif" }} className="flex flex-col items-center justify-center min-h-screen bg-[#EBFFD8] relative p-6">

      <button onClick={() => navigate('/sportsHome')} className="bg-[#994556] text-white p-2 rounded-2xl self-end mb-4">Back</button>
      
      <h1 className="font-extrabold text-[#994556] text-2xl md:text-3xl mb-8 text-center">
        ABOUT CLUB
      </h1>

      <div className="flex mt-5 flex-col md:flex-row items-center bg-white shadow-2xl rounded-lg p-6 md:p-10 w-full max-w-6xl" data-aos="fade-left">
        <div className="md:w-2/3">
          <p className="text-justify text-gray-700">
            The <strong>Sports Club</strong> of NIT Uttarakhand fosters a spirit of teamwork, discipline, and perseverance. It encourages students to engage in various sports activities to maintain a healthy and active lifestyle.
          </p>
          <p className="text-justify text-gray-700 mt-4">
            With state-of-the-art facilities and regular inter-departmental and inter-collegiate events, the Sports Club aims to nurture talent and promote physical fitness alongside academic excellence.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center mt-6 md:mt-0 md:ml-10">
          <img
            src={sportsImg}
            alt="Sports Club"
            className="rounded-full h-40 w-40 object-cover shadow-lg "
          />
        </div>
      </div>

      <div className="flex mt-5 bg-white flex-col md:flex-row items-center shadow-2xl rounded-lg p-6 md:p-10 w-full max-w-6xl" data-aos="fade-right">
        <div className="md:w-2/3">
          <p className="text-justify text-lg text-gray-700"><strong>What We Deliver</strong></p>
          <p className="text-justify text-lg text-gray-700 mt-4">
            "At the Sports Club, we believe in the power of play. Whether on the field, court, or track, our members strive for excellence, camaraderie, and personal growth through sport."
          </p>
        </div>
        <div className="md:w-1/3 mt-5 flex justify-center md:mt-0 md:ml-10">
          <img
            src={sports2}
            alt="Sports Team"
            className="rounded-full h-40 w-40 object-cover shadow-lg "
          />
        </div>
      </div>

      <div className="bg-green-150 py-12 mt-3 px-6 w-full">
        <h2 className="text-3xl text-[#994556] font-bold text-center mb-10">
          Meet Our Team
        </h2>

        <div className="w-[90vw] flex justify-center items-center text-center">
          <div className="flex flex-wrap md:ml-40 gap-8 justify-center mr-12   md:justify-start">
            {members.map((member, index) => (
              <div
                key={index}
                style={{ perspective: "800px" }}
                className="hover:bg-green-200 shadow-green-300 w-[240px] h-[180px] my-10 bg-[#B0DB9C] rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105 translate-z-[200px] hover:shadow-xl overflow-y-auto"
                data-aos="zoom-out"
                data-aos-delay={index * 50}
              >
                <h3 className="text-xl font-semibold p-3">{member.name}</h3>
                <p className="text-sm mt-1 text-green-600">{member.branch.toUpperCase()}</p>
                <p className="text-sm mt-1 text-blue-500">{member.role?.charAt(0).toUpperCase()+
                  member.role?.slice(1).toLowerCase()}</p>
                 {/* <p className="text-md mt-1 text-green-800">Contact:</p> */}
                 <p className="text-md mt-1 text-black hover:underline">{member.email}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-x-auto space-x-4 p-4 m-4 ">
          {[s1, s2, s3, s4, s5,s6].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              className="w-[90vw] md:w-[40vw] h-[40vh] object-cover rounded-xl snap-start shrink-0"
            />
          ))}
        </div>
      </div>

    </div>
  );
}
