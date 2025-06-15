import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import profile from '../assets/profile2.png'

export default function ViewUserProfile() {
  const navigate = useNavigate()
  const [details, setDetails] = useState('')

  async function handleSubmit() {
    try {
      const response1 = await axios.get('https://clubsphere-production.up.railway.app/login/viewUserProfile', {
        withCredentials: true,
      })
      setDetails(response1.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="bg-blue-200 w-full min-h-screen flex justify-center items-center px-4 py-8 relative text-black">
      <button
        onClick={() => navigate('/allClubs')}
        className="bg-blue-600 absolute top-4 left-4 text-white rounded-xl hover:bg-blue-700 px-4 py-2"
      >
        Back
      </button>

      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        
        <div className="w-full md:w-1/2 w-[3/4] md:h-[60vh] flex justify-center items-center p-6 bg-blue-100">
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 text-lg md:text-xl space-y-4">
          <div><strong>Name</strong>: {details.name}</div>
          <div><strong>Branch</strong>: {details.branch?.toUpperCase()}</div>
          <div><strong>Role</strong>: {details.role?.charAt(0).toUpperCase() + details.role?.slice(1).toLowerCase()}</div>
          <div><strong>Enrollment Year</strong>: 20{details.year}</div>
        </div>
      </div>
    </div>
  )
}
