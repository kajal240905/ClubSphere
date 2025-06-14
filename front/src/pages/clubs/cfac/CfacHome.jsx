import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CfacHome() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ fontFamily: "'Playwrite HU', serif" }}
        className="relative w-full h-screen overflow-hidden"
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          loop
          className="absolute z-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.pixabay.com/video/2022/02/09/107257-678130120_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Back Button */}
        <button
          onClick={() => navigate('/allClubs')}
          className="absolute bg-blue-900 text-white p-2 rounded-xl top-4 left-4 md:top-10 md:left-10"
        >
          Back
        </button>

        {/* Navigation Buttons */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 text-blue-900 font-bold flex flex-col md:flex-row gap-2 items-end md:items-center">
          {['Home', 'About', 'Events'].map((label) => (
            <button
              key={label}
              onClick={() => {
                if (label === 'About') navigate('/aboutCfac');
                if (label === 'Events') navigate('/CfacEvents');
                if (label === 'Home') navigate('/CfacHome');
              }}
              className="text-base md:text-xl w-32 text-center px-3 py-2 border-2 rounded-xl hover:text-white hover:bg-[#00004D] hover:border-none"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Centered Heading */}
        <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 text-blue-900 text-center px-4">
          <h1
            className="font-bold text-4xl md:text-6xl leading-snug md:leading-tight"
            style={{ textShadow: '0 0 25px #00004D' }}
          >
            CFAC CLUB
          </h1>
          <h2
            className="font-semibold  md:text-4xl mt-4 md:mt-6"
            style={{ textShadow: '0 0 19px #00004D' }}
          >
            WELCOME TO CFAC CLUB
          </h2>
        </div>
      </div>
    </>
  );
}
