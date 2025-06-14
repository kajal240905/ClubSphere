import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import profile from '../assets/profile2.png'

export default function ViewUserProfile(){
    const navigate=useNavigate()
    const [details,setDetails]=useState('')
 
  async function handleSubmit(){
    try{
    const response1=await axios.get('https://clubsphere-production.up.railway.app/login/viewUserProfile',{
        withCredentials:true,
    })
setDetails(response1.data)
console.log(response1.data)
   }

  catch(e){
    console.log(e)
  }

   }

  
   useEffect(()=>{
   handleSubmit()
   },[])

    return(

    <>
    <div className="bg-blue-200 relative text-black w-full min-h-screen overflow-hidden flex shadow-[0_0_12px
    ] justify-center items-center ">
      <button onClick={()=>navigate('/allClubs')}className='bg-blue-600 absolute top-0 left-5  text-white mt-5 rounded-xl  hover:bg-blue-700 hover:cursor-pointer self-start px-3 py-2'>Back</button>
     
      <div className="bg-white absolute md:w-[45vw] md:h-[50vh] w-[60vw] rounded-xl shadow-2xl shadow-blue-800 hover:transform-translate-5 transition all ease-in-out hover:scale-105 hover:cursor-pointer text-xl gap-16 text-center justify-center items-center">
        <img className="md:ml-64 w-[180px] h-[180px] mt-6 ml-9" src={profile}/>
   <div className="md:ml-12 mt-6"><strong>Name</strong>:{details.name}</div>
  <div className="md:ml-12"><strong>Branch</strong>: {details.branch?.toUpperCase()}</div>
<div className="md:ml-12">
  <strong>Role</strong>: {details.role?.charAt(0).toUpperCase() + details.role?.slice(1).toLowerCase()}
</div>
   <div className="md:ml-12 mb-2"><strong>Enrollment Year</strong>:20{details.year}</div>
   

  </div>
   
    </div>
    </>
  )
}
