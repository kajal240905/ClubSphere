import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import AOS from 'aos'
import "aos/dist/aos.css"

export default function AddEvent() {
  const navigate = useNavigate('/');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [eventHead, setEventHead] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [club, setClub] = useState('');
  const [registrationFee, setRegistrationFee] = useState(0);

  async function handleSubmit() {
        const eventDateTime = new Date(`${eventDate}T${eventTime}`);
    try {
      const response = await axios.post(
        'https://clubsphere-production.up.railway.app/loginExecutive/addEvent',
        {
          name,
          club,
          description,
          eventHead,
        
          eventVenue,
          eventDateTime,
          registrationFee,
        },
        { withCredentials: true }
      );
    navigate('/adminPower')
    } catch (e) {
      console.log(e);
    }
  }
useEffect(()=>{
 AOS.init({delay:1000,once:true})
},[])
  return (
    <div style={{ fontFamily: "'Playwrite HU', serif" }} className="bg-zinc-700  min-h-screen w-full overflow-hidden flex flex-col items-center">
      <button className="text-white bg-[#B026FF]  p-2 rounded-xl self-start mt-3 ml-3 hover:cursor-pointer hover:bg-purple-900" onClick={()=>navigate('/adminPower')} >Back</button>
      <div 
      
        className="md:w-[40vw]  w-[80vw] h-full rounded-xl text-[#B026FF] bg-zinc-900 m-8 pb-4 shadow-[0_0_12px_#B026FF]"
      >
        <h1 className="text-4xl text-center p-4">Add Event</h1>
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
            htmlFor="description"
            className="block mt-2 mb-1 font-medium"
          >
            Description
          </label>
          <input
            id="description"
            type="text"
            className="bg-white p-2 text-black rounded-xl w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />

          <label
            htmlFor="eventHead"
            className="mb-1 mt-2 block font-medium"
          >
            Event Head
          </label>
          <input
            type="text"
            id="eventHead"
            className="bg-white p-2 text-black rounded-xl w-full"
            value={eventHead}
            onChange={(e) => setEventHead(e.target.value)}
            placeholder="Enter event head"
          />

          <label
            htmlFor="event-date"
            className="block mt-2 mb-1 font-medium "
          >
            Event Date and Time
          </label>
          <input
            id="event-date"
            min="2023-01-01"
            max="2025-12-31"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="border px-2 py-1 rounded-xl w-full bg-white text-black"
          />

          <input
            type="time"
            id="eventTime"
            className="bg-white p-2 text-black rounded-xl mt-2"
            min="00:00"
            max="23:59"
            step="1800"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            placeholder="Enter event time"
          />

          <label
            htmlFor="eventVenue"
            className="mb-1 mt-2 block font-medium"
          >
            Event Venue
          </label>
          <input
            type="text"
            id="eventVenue"
            className="bg-white p-2 text-black rounded-xl w-full"
            value={eventVenue}
            onChange={(e) => setEventVenue(e.target.value)}
            placeholder="Enter event venue"
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
            className="bg-white p-2 text-black rounded-xl w-full"
            value={club}
            onChange={(e) => setClub(e.target.value)}
            placeholder="Enter club"
          />

          <label
            htmlFor="registrationFee"
            className="mb-1 mt-2 block font-medium"
          >
            Registration Fee
          </label>
          <input
            id="registrationFee"
            type="number"
            className="bg-white p-2 text-black rounded-xl w-full"
            value={registrationFee}
            onChange={(e) => setRegistrationFee(e.target.value)}
            placeholder="Enter fee"
            min="0"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#B026FF] md:ml-65 md:my-6  my-2 ml-28 text-center p-3 text-white rounded-3xl hover:cursor-pointer  hover:bg-purple-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
