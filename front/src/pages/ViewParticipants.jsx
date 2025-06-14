import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ViewParticipants() {
  const navigate = useNavigate('');
  const [resp,setResp]=useState([])
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const [club, setClub] = useState('');
  

  async function handleSubmit() {
    try {
      const response = await axios.post(
        'http://localhost:3000/loginExecutive/getParticipants',
        {
            name,
            club
        },
      
        { withCredentials: true }
      );
   
    setResp(response.data)
    navigate('/showParticipants',{
                   state:{participants:response.data}
                })

    } catch (e) {
      console.log(e);
    }
  }

    return (
    <div      style={{ fontFamily: "'Playwrite HU', serif" }} className="bg-zinc-700 min-h-screen w-full overflow-hidden flex flex-col items-center">
      <button className="text-white bg-[#B026FF] p-2 rounded-xl self-start mt-3 ml-3 hover:bg-purple-900 hover:cursor-pointer" onClick={()=>navigate('/adminPower')} >Back</button>
      <div
     
        className="md:w-[40vw] w-[80vw] h-full rounded-xl text-[#B026FF] bg-zinc-900 mt-6 pb-4 shadow-[0_0_12px_#B026FF]"
      >
        <h1 className="text-4xl text-center p-4">View Participants</h1>
        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="m-12 mt-4 rounded-xl"
        >
          <label
            htmlFor="name"
            className="mb-1 mt-2 block font-medium"
          >
            Event Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter event name"
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
          className="bg-[#B026FF] md:ml-65 ml-28 md:my-6 my-4 text-center p-3 text-white rounded-3xl hover:bg-purple-900 hover:cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

