import {useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function ForgotPassword(){
  const [email,setEmail] = useState('') 
  const navigate=useNavigate()
 async function handleClick(){

    try{
   const res=await axios.post('https://clubsphere-production.up.railway.app/forgotPassword',
   {email},
   {withCredentials:true}
   )
   const token = res.data.token;
   const id = res.data.userId
   alert('We have sent an email to you .Click the link to change password!')
    }
    catch(e){
        console.log(e)
    }
  }
  return(
  <>
   <div className ="relative min-h-screen w-full bg-zinc-900 overflow-hidden flex flex-col justify-center  items-center">
            <button  onClick={()=>navigate('/login')} className="absolute top-4 left-4  rounded-xl p-2 text-white bg-[#B026FF] self-start">Back</button>
         <div className="absolute bg-zinc-700 rounded-xl w-[50vw] h-[50vh] items-center justify-center text-xl flex flex-col shadow-[0_0_12px_#B026FF]">
           
          <input
            id="email"
            type="email"
            className="bg-white p-2 rounded-xl  w-[30vw]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter college email"
          />
          <button onClick={handleClick}
          className="px-2 py-2 rounded-xl bg-[#B026FF] mt-12">Submit</button>
          </div>

        </div>
  </>)
        
}
