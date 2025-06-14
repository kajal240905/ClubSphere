
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SportsHome() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ fontFamily: "'Playwrite HU', serif" }} className="relative w-full h-screen overflow-hidden">
        <video autoPlay muted playsInline className="absolute z-0 w-full h-full object-cover">
          <source
            src="https://videos.pexels.com/video-files/32311041/13780182_640_360_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

       
        <button
          onClick={() => navigate('/allClubs')}
          className="absolute bg-[#C0C0C0] text-black p-2 hover:scale-105 hover:bg-gray-400 hover:cursor-pointer rounded-xl top-4 left-4 md:top-10 md:left-10"
        >
          Back
        </button>

        <div className="absolute top-4 right-4 md:top-10 md:right-10 text-[#C0C0C0] font-bold flex flex-col md:flex-row gap-2 items-end md:items-center">
          <button className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:text-black hover:bg-[#C0C0C0] hover:border-none">
            Home
          </button>
          <button
            onClick={() => navigate('/aboutSports')}
            className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:text-black hover:bg-[#C0C0C0] hover:border-none"
          >
            About
          </button>
          <button
            onClick={() => navigate('/SportsEvents')}
            className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:text-black hover:bg-[#C0C0C0] hover:border-none"
          >
            Events
          </button>
          <button
            onClick={() => navigate('/MaterialSports')}
            className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:text-black hover:bg-[#819A91] hover:border-none"
          >
            Items
          </button>
        </div>

    
        <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 text-[#C0C0C0] text-center px-4">
          <h1
            className="font-bold text-3xl md:text-6xl"
            style={{ textShadow: '0 0 25px #228B22' }}
          >
            SPORTS CLUB
          </h1>
          <h2
            className="font-semibold text-xl md:text-4xl mt-4 md:mt-6"
            style={{ textShadow: '0 0 19px #228B22' }}
          >
           Where passion meets performance
          </h2>
        </div>
      </div>
    </>
  );
}


