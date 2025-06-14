
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import tech1 from '../../../assets/tech1.png';
import tech2 from '../../../assets/tech2.png';
import t1 from '../../../assets/te1.jpg';
import t2 from '../../../assets/te2.jpg';
import t3 from '../../../assets/te3.JPG';
import t4 from '../../../assets/te4.JPG';
import t5 from '../../../assets/te5.JPG';

export default function AboutTech() {
  const navigate = useNavigate();
  const [members, setMember] = useState([]);

  const handleClick = async () => {
    try {
      const response1 = await axios.get('http://localhost:3000/login/getMember', {
        withCredentials: true,
        params: {
          club: 'tech'
        }
      });
      console.log(response1.data);
      setMember(response1.data);
    } catch (e1) {
      try {
        const response2 = await axios.get('http://localhost:3000/loginExecutive/getMember', {
          withCredentials: true,
          params: {
            club: 'tech'
          }
        });
        console.log(response2.data);
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
    <>
      <div className="w-full min-h-screen overflow-x-hidden bg-zinc-900 text-[#91e5e0] font-sans">
        <div>
          <button
            onClick={() => navigate('/techHome')}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            className="bg-[#00ffee] text-black p-2 rounded-2xl m-6"
          >
            Back
          </button>

          <section
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="w-[90vw] mx-auto flex flex-col md:flex-row justify-between"
          >
            <div
              className="md:w-[50%] w-full mt-8 p-4 overflow-y-auto hover:scale-105 rounded-xl shadow-[0_0_12px_#91e5e0]"
              data-aos="fade-left"
            >
              <h1
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="mb-4 text-3xl md:text-4xl font-bold"
              >
                ABOUT TECH
              </h1>
              <p>
                The Tech Club of NIT Uttarakhand is a vibrant community of tech-savvy students passionate about innovation, coding, design, building, and emerging technologies...
              </p>
              <p className="mt-2">
                Founded to nurture creativity and curiosity, the club serves as the campus hub for technological learning and collaboration...
              </p>
              <p className="mt-2">
                The Tech Club empowers students to grow into confident technologists, innovators, and future leaders in the tech world.
              </p>
            </div>

            <div className="md:w-[45%] w-full mt-8 flex justify-center items-center" data-aos="fade-right">
              <img className="w-[60vw] md:w-[30vw] h-auto hidden md:block rounded-xl" src={tech1} alt="tech1" />
            </div>
          </section>
        </div>

        <div className="md:mt-20 w-full mt-6">
          <section
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="w-[90vw] mx-auto flex flex-col md:flex-row justify-between"
          >
            <div className="md:w-[50%] w-full  flex justify-center" data-aos="fade-left">
              <img className="w-[60vw] md:w-[30vw] hidden md:block h-auto rounded-xl" src={tech2} alt="tech2" />
            </div>

            <div
              className="md:w-[50%] w-full  p-4 hover:scale-105 rounded-xl shadow-[0_0_12px_#91e5e0]"
              data-aos="fade-right"
            >
              <h1
                style={{ fontFamily: "'Orbitron', sans-serif" }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                WHAT WE DO ?
              </h1>
              <p className="mt-3">
                We organize a wide variety of engaging and skill-building activities to help students explore <strong>technology</strong> and unlock their <strong>potential</strong>.
              </p>
              <ul className="list-disc pl-5 mt-5">
                {[
                  "💻 Coding Nights – Fun sessions focused on peer learning, problem-solving, and collaboration",
                  "🛠️ Hardware Projects – Build real-world tech using Arduino, Raspberry Pi, and sensors",
                  "🎨 UI/UX Sprints – Combine design thinking with Figma",
                  "🎤 Tech Talks & Guest Sessions – Learn from industry experts on AI, Web3, cloud, and cybersecurity",
                  "⚡ Hackathons – 24-hour coding marathons solving real-world challenges",
                  "🌐 Web Development Workshops – HTML, CSS, JS, React, backend",
                  "🤖 AI/ML Exploration – Intro sessions on ML and AI",
                  "🔍 DSA Bootcamps – Prepare for internships & placements"
                ].map((item, index) => (
                  <li key={index} className="mt-2">{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        
        <h1
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          className="text-3xl md:text-4xl font-bold mt-30 text-center"
        >
          MEET OUR TEAM
        </h1>

        <div className="w-full flex  text-center justify-center items-center md:ml-5 ">
          <div className="mt-8  flex flex-wrap  justify-center md:ml-36 md:justify-start">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-[#daf8f6] w-[260px] p-6 m-4 rounded-lg shadow-lg text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
                data-aos="zoom-out"
                data-aos-delay={index * 50}
              >
                <h3 className="text-xl font-semibold text-black">{member.name}</h3>
                <p className="text-sm mt-1 text-red-900">{member.branch.toUpperCase()}</p>
                <p className="text-sm mt-1 text-blue-500">
                  {member.role?.charAt(0).toUpperCase() + member.role?.slice(1).toLowerCase()}
                </p>
                <p className="text-md mt-1 text-green-800">Contact:</p>
                <p className="text-md mt-1 text-black hover:underline">{member.email}</p>
              </div>
            ))}
          </div>
        </div>

        <h1
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          className="text-3xl md:text-4xl text-center mt-20"
        >
          🔍 Backtrace Moments
        </h1>
        <div className="flex overflow-x-auto space-x-4 p-4 m-4 mb-12 snap-x snap-mandatory">
          {[t1, t2, t3, t4, t5].map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`Image ${index + 1}`}
              className="w-[80vw] md:w-[40vw] h-[50vh] object-cover rounded-xl snap-start shrink-0"
            />
          ))}
        </div>
      </div>
    </>
  );
}
