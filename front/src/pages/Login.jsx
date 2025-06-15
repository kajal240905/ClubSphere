import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export default function Login() {
   const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
  
    const handleLogin = async (e) => {
      e.preventDefault();
  
      try {
        const payload = {
       
          email,
          password,
         
        };
  
      
  
        const res = await axios.post("https://clubsphere-production.up.railway.app/login", payload, {
          withCredentials: true, // include cookies
        });
  
        if (res.status === 200 || res.status === 201) {
          
          navigate("/allClubs");
        }
      } catch (err1) {
        try{
        const payload = {
       
          email,
          password,
         
        };
  
      
  
        const res = await axios.post("https://clubsphere-production.up.railway.app/loginExecutive", payload, {
          withCredentials: true, 
        });
  
        if (res.status === 200 || res.status === 201) {
          
          navigate("/allClubs");
        }
      }
      catch(error){
         console.log("Error ",err1,error)
         alert('Invalid credentials')
      }
       
      }
    };

  return (


    <div className="bg-black w-full h-screen flex justify-center items-center">
        <button style={{ fontFamily: "'Playwrite HU', serif" }} onClick={()=>navigate('/')} className="text-white z-50 p-3 absolute  top-6 left-10  bg-[#B026FF] rounded-xl border-none  py-3 px-2 border-2">Back</button>
       
      <div
        style={{ boxShadow: '0px 0px 15px #B026FF' }}
        className="relative h-[500px] w-[300px] bg-black text-center rounded-2xl p-6"
      >
        <h1
          style={{ fontFamily: "'Playwrite HU', serif" }}
          className="text-[#B026FF] md:text-5xl text-3xl  mt-2"
        >
          LOGIN
        </h1>

        <div
          style={{ fontFamily: "'Playwrite HU', serif" }}
          className="text-white text-xl mt-10 py-6"
        >
          <div className="text-white text-left font-bold ml-4 mb-1">Email</div>
          <input
            type="email" value={email}
            placeholder="Enter your email"
            className="w-[85%] ml-4 bg-gray-600 text-white rounded-xl text-sm px-4 py-3 border border-[#B026FF] hover:border-2"
             onChange={(e) => setEmail(e.target.value)} style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          />

          <div className="text-white text-left font-bold ml-4 mt-6 mb-1">Password</div>
          <input
            type="password" value={password}
            placeholder="Enter your password"
            className="w-[85%] ml-4 bg-gray-600 text-white rounded-xl text-sm px-8 py-3 border border-[#B026FF] hover:border-2"
            onChange={(e) => setPassword(e.target.value)}  style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
          />

          <div onClick={()=>navigate('/forgotPassword')} className="text-right mr-4 mt-6 text-sm text-red-200 hover:underline cursor-pointer">
            Forgot password?
          </div>

          <button  type='submit' onClick={handleLogin}
            className="hover:cursor-pointer text-2xl text-white font-bold bg-[#B026FF] mt-12 px-12 py-2 rounded-2xl hover:bg-purple-950 "
            style={{ fontFamily: "'Playwrite HU', serif" }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
