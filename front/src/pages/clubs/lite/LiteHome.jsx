import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LiteHome() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{fontFamily: "'Playwrite HU', serif"}}  className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/8549579/8549579-sd_640_360_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Back Button */}
        <button
          onClick={() => navigate('/allClubs')}
          className="absolute bg-[#E6E6FA] shadow-[0_0_12px_#E6E6FA] text-red p-2 rounded-xl top-4 left-4 md:top-10 md:left-10"
        >
          Back
        </button>

        {/* Navigation Buttons */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 text-[#E6E6FA] font-bold flex flex-col md:flex-row gap-2 items-end md:items-center">
          {['Home', 'About', 'Events'].map((label) => (
            <button
              key={label}
              onClick={() => {
                if (label === 'Home') navigate('/liteHome');
                if (label === 'About') navigate('/aboutLite');
                if (label === 'Events') navigate('/LiteEvents');
              }}
              className="text-base md:text-xl w-32 text-center px-3 py-2 border-2 rounded-xl hover:text-black hover:bg-[#FFAB5B] hover:border-none"
            >
              {label}
            </button>
          ))}
        </div>

    
        <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 text-[#FFAB5B] text-center px-4">
          <h1
            className="font-bold text-4xl md:text-6xl leading-snug md:leading-tight"
            style={{ textShadow: '0 0 25px #FFAB5B' }}
          >
            <span className="block md:inline">LITERARY</span>
            <span className="block md:inline md:ml-3">CLUB</span>
          </h1>
          <h2
            className="font-semibold text-xl md:text-4xl mt-4 md:mt-6"
            style={{ textShadow: '0 0 19px #FFAB5B' }}
          >
            "Where words breathe, minds awaken"
          </h2>
        </div>
      </div>
    </>
  );
} 
