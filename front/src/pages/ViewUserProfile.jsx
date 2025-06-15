import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import profile from '../assets/profile2.png';

export default function ViewUserProfile() {
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get('https://clubsphere-production.up.railway.app/login/viewUserProfile', {
          withCredentials: true,
        });
        setDetails(response.data);
        console.log(response.data);
      } catch (e) {
        console.error('Error fetching profile:', e);
      }
    }

    fetchProfile();
  }, []);

  return (
    <div className="bg-blue-200 relative w-full min-h-screen flex items-center justify-center text-black">
      <button
        onClick={() => navigate('/allClubs')}
        className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
      >
        Back
      </button>

      <div className="bg-white rounded-xl shadow-2xl p-6 w-[90vw] md:w-[45vw] max-w-[600px] flex flex-col items-center transition-transform transform hover:scale-105">
        <img src={profile} alt="Profile" className="w-40 h-40 rounded-full object-cover mb-4" />

        <div className="text-lg text-left w-full px-4">
          <p><strong>Name:</strong> {details?.name || 'Loading...'}</p>
          <p><strong>Branch:</strong> {details?.branch?.toUpperCase() || 'Loading...'}</p>
          <p>
            <strong>Role:</strong>{' '}
            {details?.role
              ? details.role.charAt(0).toUpperCase() + details.role.slice(1).toLowerCase()
              : 'Loading...'}
          </p>
         
        </div>
      </div>
    </div>
  );
}
