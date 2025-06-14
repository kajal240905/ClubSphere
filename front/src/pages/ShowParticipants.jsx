import { useLocation ,useNavigate} from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios';

export default function ShowParticipants() {
  const location = useLocation();
  const participants = location.state?.participants;
 console.log(participants)
 return(
    <>
    <div className="bg-zinc-100 w-full min-h-screen overflow-hidden flex justify-center items-center flex-col">
     {/* <h1 className="text-4xl text-[#B026FF] text-center mt-4">Participants</h1> */}
    <div className="bg-zinc-200 text-black  w-[100vw] min-h-screen">
      
 <div className="overflow-x-auto">
  <table className="min-w-full table-auto border-2  border-black">
    <thead className="bg-gray-200">
      <tr>
         <th className="px-4 py-2 text-left border">S. No.</th>
        <th className="px-4 py-2 text-left border">Name</th>
        <th className="px-4 py-2 text-left border">Email</th>
        <th className="px-4 py-2 text-left border">Branch</th>
      </tr>
    </thead>
    <tbody>
      {participants.map((participant, idx) => (
        <tr key={idx} className="bg-white">
          <td className="px-4 py-2 border w-[5vw]">{idx+1}</td>
          <td className="px-4 py-2 border">{participant.name}</td>
          <td className="px-4 py-2 border">{participant.email}</td>
          <td className="px-4 py-2 border">{participant.branch?.toUpperCase()}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
    </div>
    </>
 )

 


}
