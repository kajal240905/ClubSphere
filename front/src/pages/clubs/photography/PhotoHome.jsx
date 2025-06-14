import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PhotoHome() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{ fontFamily: "'Playwrite HU', serif" }}
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
            src="https://cdn.pixabay.com/video/2025/04/07/270673_tiny.mp4"
            type="video/mp4"
          />
        </video>

        {/* Back Button */}
        <button
          onClick={() => navigate('/allClubs')}
          className="absolute bg-[#690B22] text-white p-2 rounded-xl top-4 left-4 md:top-10 md:left-10"
        >
          Back
        </button>

        {/* Navigation Buttons */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 text-white font-bold flex flex-col md:flex-row gap-2 items-end md:items-center">
          <button
            onClick={() => navigate('/photoHome')}
            className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:bg-[#690b22] hover:border-none"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/aboutPhoto')}
            className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:bg-[#690b22] hover:border-none"
          >
            About
          </button>
          <button
            onClick={() => navigate('/PhotoEvents')}
            className="text-base md:text-xl px-3 py-2 border-2 rounded-xl hover:bg-[#690b22] hover:border-none"
          >
            Events
          </button>
        </div>

        {/* Centered Heading */}
        <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 text-[#690B22] text-center px-4 pb-12">
          <h1
            className="font-bold text-3xl md:text-5xl leading-snug md:leading-tight"
            style={{ textShadow: '0 0 25px #008080' }}
          >
            PHOTOGRAPHY<br className="hidden md:inline" />
            <span className="block mt-2 md:mt-0">CLUB</span>
          </h1>
          <h2
            className="font-semibold text-xl md:text-4xl mt-4 md:mt-6"
            style={{ textShadow: '0 0 19px #008080' }}
          >
            "Freeze moments. Frame memories."
          </h2>
        </div>
      </div>
    </>
  );
}
