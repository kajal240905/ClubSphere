import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSign = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        name,
        email,
        password
      };

    

      const res = await axios.post("https://clubsphere-production.up.railway.app/register", payload, {
        withCredentials: true, // include cookies
      });

      if (res.status === 200 || res.status === 201) {
        alert("Registration successful!");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div   className="flex relative h-screen w-full justify-center items-center bg-black">
        <button style={{ fontFamily: "'Playwrite HU', serif" }} onClick={()=>navigate('/')} className=" z-50 p-4 absolute  top-6 left-12   bg-[#b026ff] rounded-xl border-none  mb-4 px-2 py-1 border-2 hover:cursor-pointer">Back</button>

      <div
        style={{ boxShadow: "0px 0px 15px #b026ff" }}
        className="absolute  my-4 py-4 md:w-1/4 bg-black border-0.2 border-amber-200 shadow-2xl flex flex-col justify-center items-center w-[80vw] md:h-[70vh] h-[70vh] "
      >
        <h1
          style={{ fontFamily: "Playwrite HU, serif" }}
          className="text-[#B026FF] text-3xl font-bold mb-6 mt-4 pt-4"
        >
          SIGN UP
        </h1>

        <form className="flex flex-col gap-4 w-full px-8" onSubmit={handleSign}>
          <label  style={{ fontFamily: "Playwrite HU, serif" }} className="text-white">Full Name</label>
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            className="p-2 rounded-md border border-gray-300 bg-gray-800 text-white"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label style={{ fontFamily: "Playwrite HU, serif" }} className="text-white">Email</label>
          <input
            type="email"
            value={email}
            placeholder="Email"
            className="p-2 rounded-md border border-gray-300 bg-gray-800 text-white"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={{ fontFamily: "Playwrite HU, serif" }} className="text-white">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="p-2 rounded-md border border-gray-300 bg-gray-800 text-white"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

         
          <button style={{ fontFamily: "Playwrite HU, serif" }}
            type="submit"
            className="bg-[#B026FF] text-black font-bold p-2  mt-4 mb-4 rounded-md hover:cursor-pointer "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
