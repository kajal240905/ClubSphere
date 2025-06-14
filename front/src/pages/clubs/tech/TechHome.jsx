import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TechHome() {
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      navigate('/aboutTech');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div
        style={{ fontFamily: "'Orbitron', sans-serif" }}
        className="relative w-full h-screen overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source
            src="https://assets-conversion.sqspcdn.com/cusp/frontend/transition-to-cms/saving-background-v1.webm"
            type="video/webm"
          />
          <source
            src="https://assets-conversion.sqspcdn.com/cusp/frontend/transition-to-cms/saving-background-v1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Back Button */}
        <button
          onClick={() => navigate('/allClubs')}
          className="absolute bg-[#00ffee] text-red p-2 rounded-xl top-4 left-4 md:top-10 md:left-10"
        >
          Back
        </button>

        {/* Navigation Buttons */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 text-[rgb(0,255,238)] font-bold flex flex-col md:flex-row gap-2 items-end md:items-center">
          {['Home', 'About', 'Events', 'Inventory'].map((label, idx) => (
            <button
              key={label}
              onClick={() => {
                if (label === 'About') handleClick();
                if (label === 'Events') navigate('/TechEvents');
                if (label === 'Inventory') navigate('/materialsTech');
              }}
              className="text-base md:text-xl w-32 text-center px-3 py-2 border-2 bg-transparent hover:text-black hover:bg-[#00ffee] hover:border-none"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Centered Heading */}
        <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 text-[#00ffee] text-center px-4">
          <h1
            className="font-bold text-4xl md:text-6xl leading-snug md:leading-tight"
            style={{ textShadow: '0 0 20px #00ffee' }}
          >
            <span className="block md:inline">TECH</span>
            <span className="block md:inline md:ml-3">CLUB</span>
          </h1>
          <h2
            className="font-semibold text-xl md:text-4xl mt-4 md:mt-6"
            style={{ textShadow: '0 0 15px #00ffee' }}
          >
            "From curiosity to creation"
          </h2>
        </div>
      </div>
    </>
  );
}
