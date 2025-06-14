import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddEventCfac() {
  const navigate = useNavigate('/');
  const [itemName, setItemName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  
  const [club, setClub] = useState('');
  const [quantity,setQuantity] = useState(0);

  async function handleSubmit() {
    try {
      const response = await axios.post(
        'https://clubsphere-production.up.railway.app/loginExecutive/issueItem',
        {
          itemName,
          userEmail,
          club,
          quantity
        },
        { withCredentials: true }
      );
       alert("Item issued successfully")
    navigate('/adminPower')
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div style={{ fontFamily: "'Playwrite HU', serif" }} className="bg-zinc-700 text-[#B026FF] min-h-screen w-full overflow-hidden flex flex-col items-center">
      <button className="text-white bg-[#B026FF] p-2 rounded-xl self-start mt-3 ml-3 hover:bg-purple-900 hover:cursor-pointer" onClick={()=>navigate('/adminPower')} >Back</button>
      <div
        style={{ fontFamily: "'Playwrite HU', serif" }}
        className="md:w-[40vw] w-[80vw] h-full rounded-xl text-[#B026FF] bg-zinc-900 mt-6 pb-4 shadow-[0_0_12px_#B026FF]"
      >
        <h1 className="text-4xl text-center p-4">Issue Item</h1>
        <div
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="m-12 mt-4 rounded-xl"
        >
          <label
            htmlFor="itemName"
            className="mb-1 mt-2 block font-medium"
          >
            Item Name
          </label>
          <input
            id="itemName"
            type="text"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name"
          />


                    <label
            htmlFor="userEmail"
            className="mb-1 mt-2 block font-medium"
          >
            User Email
          </label>
          <input
            id="userEmail"
            type="email"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter user email"
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

          <label
            htmlFor="quantity"
            className="mb-1 mt-2 block font-medium"
          >
          Quantity
          </label>
          <input
            id="quantity"
            type="number"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
            min="0"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-[#B026FF] text-white md:ml-65 ml-28 md:my-6 my-3 text-center p-3 rounded-3xl hover:bg-purple-900 hover:cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
