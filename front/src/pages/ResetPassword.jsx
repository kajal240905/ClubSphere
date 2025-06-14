import {useState,useEffect} from 'react'
import axios from 'axios'
import{ useSearchParams,useNavigate} from 'react-router-dom'
export default function ResetPassword(){
  const [searchParams]=useSearchParams()
  const id=searchParams.get('id')
  const token=searchParams.get('token')
  const [message,setMessage]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  
 async function handleClick(){
    try{
   const res = await axios.post(`http://localhost:3000/resetPassword?id=${id}&token=${token}`, {
        password
      });
      setMessage(res.data.message)
}
   
   
    catch(e){
        console.log(e)
    }
  }
  return(
  <>
   <div className =" relative min-h-screen w-full bg-zinc-800 overflow-hidden flex flex-col items-center justify-center">
          
            <button  onClick={()=>navigate('/login')} className="absolute top-4 left-4  rounded-xl p-2 text-white bg-[#B026FF] self-start">Back</button>
          <div className="absolute bg-zinc-700 rounded-xl md:w-[50vw] md:h-[50vh] h-[30vh] w-[80vw] items-center justify-center text-xl flex flex-col shadow-[0_0_12px_#B026FF]">
           
          <input
            id="password"
            type="text"
            className="bg-white p-2 rounded-xl md:w-[40vw] w-[55vw] text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
          <button onClick={handleClick} className="bg-[#B026FF] md:px-4 p-2 mt-4 rounded-xl w-[30vw] md:w-[10vw] text-white">
        Reset 
      </button>

         
          </div>
            
      {message && <p className="mt-4">{message}</p>}
</div>
</>

)}