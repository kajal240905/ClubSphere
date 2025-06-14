import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import photo1 from '../../../assets/photo1.png';
import photo2 from '../../../assets/photo2.png';
import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p2.png';
import p3 from '../../../assets/p3.png';
import p4 from '../../../assets/p4.png';
import p5 from '../../../assets/p5.png';
import p6 from '../../../assets/p6.png';

export default function AboutPhoto() {
  const navigate = useNavigate();
  const [members, setMember] = useState([]);

  const handleClick = async () => {
    try {
      const response1 = await axios.get('https://clubsphere-production.up.railway.app/login/getMember', {
        withCredentials: true,
        params: { club: 'photography' }
      });
      setMember(response1.data);
    } catch (e1) {
      try {
        const response2 = await axios.get('https://clubsphere-production.up.railway.app/loginExecutive/getMember', {
          withCredentials: true,
          params: { club: 'photography' }
        });
        setMember(response2.data);
      } catch (e2) {
        console.log("Both requests failed");
      }
    }
  };

  useEffect(() => {
    handleClick();
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen overflow-hidden bg-[#B2C9AD] text-[#690b22] font-sans" style={{ fontFamily: "'Playwrite HU', serif" }}>
      
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate('/photoHome')}
          className="bg-[#690B22] text-[#B2C9AD] px-4 py-2 rounded-2xl"
        >
          Back
        </button>
      </div>

      {/* About Photography Section */}
      <section className="w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="md:w-[45vw] h-[45vh] w-[80vw] mt-6 shadow-[0_0_12px_#690B22] p-4 rounded-xl overflow-y-auto" data-aos="fade-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">About Photography</h1>
          <p>The Photography Club of NIT Uttarakhand captures the essence of campus life through a creative lens. It's a community of students passionate about storytelling, visual aesthetics, and digital art.</p>
          <p className="mt-2">From covering institute events to organizing photo walks, exhibitions, and editing workshops — the club serves as a platform for budding photographers to learn, create, and inspire.</p>
          <p className="mt-2">Whether you're a DSLR expert or a mobile photographer, the club welcomes all photography enthusiasts to explore the beauty of moments frozen in time.</p>
        </div>
        <div className="md:w-[45vw] mt-10 hidden md:block" data-aos="fade-right">
          <img className="w-[30vw] h-[40vh] rounded-xl ml-4" src={photo1} alt="Photography Club" />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start mt-16">
        <div className="md:w-[45vw] hidden md:block" data-aos="fade-left">
          <img className="w-[30vw] h-[40vh] ml-4 mt-12 rounded-xl" src={photo2} alt="Club Activities" />
        </div>
        <div className="md:w-[45vw] w-[80vw] h-[45vh] mt-6 shadow-[0_0_12px_#690B22] p-4 rounded-xl overflow-y-auto" data-aos="fade-right">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">What we do??</h1>
          <p>We celebrate the art of photography by organizing creative and hands-on activities throughout the year.</p>
          <ul className="list-disc pl-5 mt-5">
            <li className="mt-2">📸 <strong>Photo Walks</strong> – Explore scenic spots and improve framing & lighting</li>
            <li className="mt-2">🖼️ <strong>Exhibitions</strong> – Showcase students' work and visual storytelling</li>
            <li className="mt-2">🎥 <strong>Videography Challenges</strong> – Capture motion stories with creativity</li>
            <li className="mt-2">🧠 <strong>Editing Workshops</strong> – Learn tools like <strong>Lightroom</strong> and <strong>Photoshop</strong></li>
            <li className="mt-2">📷 <strong>Photography 101</strong> – Basics of DSLR, manual mode, and composition</li>
            <li className="mt-2">🌆 <strong>Theme-Based Projects</strong> – Capture emotions, events, or natural beauty</li>
            <li className="mt-2">📅 <strong>Event Coverage</strong> – Document institute events with professional quality</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <h1 className="text-2xl md:text-4xl font-bold mt-28 text-center">Meet our team</h1>
      <div className="w-[90vw] mx-auto flex justify-center items-center text-center">
        <div className="mt-10 flex flex-wrap md:justify-start justify-center gap-14 md:ml-30">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-[#daf8f6] w-[240px] h-[180px] p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              data-aos="zoom-out"
              data-aos-delay={index * 50}
            >
              <h3 className="text-xl font-semibold text-black">{member.name}</h3>
              <p className="text-sm mt-1 text-red-900">{member.branch?.toUpperCase()}</p>
              <p className="text-sm mt-1 text-blue-500">
                {member.role?.charAt(0).toUpperCase() + member.role?.slice(1).toLowerCase()}
              </p>
              <p className="text-md mt-1 text-green-800">Contact:</p>
              <p className="text-md mt-1 text-black hover:underline">{member.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <h1 className="text-2xl md:text-4xl text-center mt-20">🔍 Backtrace Moments</h1>
      <div className="flex overflow-x-auto space-x-4 p-4 m-4 mb-12 snap-x snap-mandatory">
        {[p1, p2, p3, p4, p5, p6].map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`Club Activity ${index + 1}`}
            className="w-[80vw] md:w-[40vw] h-[50vh] object-cover rounded-xl snap-start shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
