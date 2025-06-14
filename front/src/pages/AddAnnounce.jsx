import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddEventCfac() {
  const navigate = useNavigate('/');
  const [title,setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [club, setClub] = useState('');
  

  async function handleSubmit() {
    try {
      const response = await axios.post(
        'http://localhost:3000/loginExecutive/announce',
        {
          title,
          description,
          club
        },
        { withCredentials: true }
      );
    navigate('/allClubs')
    alert("Announcement added sucessfully")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div  style={{ fontFamily: "'Playwrite HU', serif" }} className="bg-zinc-700 min-h-screen w-full overflow-hidden flex flex-col items-center">
      <button className="text-white bg-[#B026FF] p-2 rounded-xl self-start mt-3 ml-3" onClick={()=>navigate('/adminPower')} >Back</button>
      <div
       
        className="md:w-[40vw] w-[80vw] h-full rounded-xl text-[#B026FF] bg-zinc-900 mt-6 pb-4"
      >
        <h1 className="text-4xl text-center p-4">Add an announcement</h1>
        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="m-12 mt-4 rounded-xl"
        >
          <label
            htmlFor="title"
            className="mb-1 mt-2 block font-medium"
          >
           Title
          </label>
          <input
            id="title"
            type="text"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title here"
          />

          <label
            htmlFor="description"
            className="block mt-2 mb-1 font-medium"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />

         
           <label
            htmlFor="club"
            className="block mt-2 mb-1 font-medium"
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
          className="bg-[#B026FF] md:ml-65 ml-28 md:my-6 my-4 text-center p-3 text-white rounded-3xl ]"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
