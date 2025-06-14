import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddEventCfac() {
  const navigate = useNavigate('');
  const [email, setEmail] = useState('');
  
  const [club, setClub] = useState('');
  

  async function handleSubmit() {
    try {
      const response = await axios.post(
        'https://clubsphere-production.up.railway.app/loginExecutive/addMember',
        {
          email,
          club
        },
       
        { withCredentials: true }
      );
        alert("Member added successfully")
    navigate('/adminPower')

    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div style={{ fontFamily: "'Playwrite HU', serif" }} className="bg-zinc-700 min-h-screen w-full overflow-hidden flex flex-col items-center">
      <button className="text-white bg-[#B026FF] p-2 rounded-xl self-start mt-3 ml-3 hover:bg-purple-900 hover:cursor-pointer" onClick={()=>navigate('/adminPower')} >Back</button>
      <div
        style={{ fontFamily: "'Playwrite HU', serif" }}
        className="md:w-[40vw] w-[80vw] h-full rounded-xl text-[#B026FF] bg-zinc-900 mt-28 pb-4 shadow-[0_0_12px_#B026FF]"
      >
        <h1 className="text-4xl text-center p-4">Add Member</h1>
        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="m-12 mt-8 rounded-xl"
        >
          <label
            htmlFor="email"
            className="mb-1 mt-2 block font-medium"
          >
            Enter email
          </label>
          <input
            id="email"
            type="email"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter college email"
          />

          
          <label
            htmlFor="club"
            className="mb-1 mt-2 block font-medium"
          >
            Club
          </label>
          <input
            id="club"
            type="text"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            placeholder="Enter club"
          />

         </div>

        <button
          onClick={handleSubmit}
          className="bg-[#B026FF] md:ml-65 ml-28 md:my-4 my-2 text-center p-3 text-white  rounded-3xl hover:bg-purple-900 hover:cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
