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
      console.log(response1.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    handleSubmit()
  }, [])

  return (
    <div className="bg-blue-200 relative text-black w-full min-h-screen overflow-hidden flex justify-center items-center px-4 py-8">
      <button
        onClick={() => navigate('/allClubs')}
        className="bg-blue-600 absolute top-4 left-4 text-white rounded-xl hover:bg-blue-700 px-4 py-2"
      >
        Back
      </button>

      <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 text-xl text-center p-6 flex flex-col items-center">
        <img className="w-[140px] h-[140px] mb-4 object-cover rounded-full" src={profile} alt="Profile" />

        <div className="mb-2"><strong>Name</strong>: {details.name}</div>
        <div className="mb-2"><strong>Branch</strong>: {details.branch?.toUpperCase()}</div>
        <div className="mb-2">
          <strong>Role</strong>: {details.role?.charAt(0).toUpperCase() + details.role?.slice(1).toLowerCase()}
        </div>
        <div><strong>Enrollment Year</strong>: 20{details.year}</div>
      </div>
    </div>
  )
}
