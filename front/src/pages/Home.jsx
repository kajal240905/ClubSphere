import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate()
  const letters = [
  { char: 'C', color: 'text-[#FF4C4C]', transform: '-translate-x-[200%] -translate-y-[200%]' },
  { char: 'L', color: 'text-[#FF9900]', transform: '-translate-y-[200%]' },
  { char: 'U', color: 'text-[#FFD700]', transform: 'translate-x-[200%] -translate-y-[200%]' },
  { char: 'B', color: 'text-[#32CD32]', transform: '-translate-x-[200%]' },
  { char: 'S', color: 'text-[#00CED1]', transform: 'translate-x-[200%]' },
  { char: 'P', color: 'text-[#1E90FF]', transform: '-translate-x-[200%] translate-y-[200%]' },
  { char: 'H', color: 'text-[#9370DB]', transform: 'translate-y-[200%]' },
  { char: 'E', color: 'text-[#FF69B4]', transform: 'translate-x-[200%] translate-y-[200%]' },
  { char: 'R', color: 'text-[#FF1493]', transform: '-translate-y-[300%]' },
  { char: 'E', color: 'text-[#FF6347]', transform: '-translate-x-[300%]' },
];


  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black font-sans">
      <video
        autoPlay
        muted
        
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
        src  ="https://cdn.pixabay.com/video/2024/06/30/218903_large.mp4"
       
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
        <div className="flex font-['Playwrite_HU']">
          {letters.map((l, i) => (
            <span
              key={i}
              className={`text-[5vw] font-normal relative opacity-0 drop-shadow-md transition-all duration-1000 ease-in-out ${l.color} ${
                animate ? 'opacity-100 translate-x-0 translate-y-0' : l.transform
              }`}
            >
              {l.char}
            </span>
          ))}
        </div>

        <div className="flex gap-5 mt-6">
          <button onClick={()=>navigate('/login')} className="hover:cursor-pointer md:px-6 md:py-3 p-2 text-white bg-black/60 font-bold border-white border-2 rounded-lg transition-all hover:bg-white hover:text-black">
            Login
          </button>
          <button onClick={()=>navigate('/signup')} className="hover:cursor-pointer md:px-6 md:py-3 p-2 text-white bg-black/60 font-bold border-white border-2 rounded-lg transition-all hover:bg-white hover:text-black">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}


