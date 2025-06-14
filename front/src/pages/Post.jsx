import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'
import del from '../assets/delete.png';

export default function Post() {
  const navigate = useNavigate()
  const [posts, setPost] = useState([])


  async function handleSubmit(postId) {
  
    
    try {
      const response1 = await axios.post(
        'http://localhost:3000/login/likePost',
         {postId} ,
        { withCredentials: true }
      )

    console.log(response1.data)
      const updatedLike = response1.data
      setPost(prevPosts =>
        prevPosts.map(post =>
          post._id === postId ? { ...post, like: updatedLike } : post
        )
      )
      console.log(updatedLike)
    } catch (err1) {
      try{
       const response2 = await axios.post(
        'http://localhost:3000/loginExecutive/likePost',
         {postId} ,
        { withCredentials: true }
      )

    console.log(response2.data)
      const updatedLike = response2.data
      setPost(prevPosts =>
        prevPosts.map(post =>
          post._id === postId ? { ...post, like: updatedLike } : post
        )
      )
      console.log(updatedLike)
    }
      catch(err2){
        console.log("Both request failed",err1,err2)
      }
     
    }
  }


  async function handleClick() {
    try {
      const res1 = await axios.get('http://localhost:3000/login/getAllPosts', {
        withCredentials: true
      })
      setPost(res1.data.posts)
      console.log(res1.data)
    } catch (err1) {
      try{
        const res2 = await axios.get('http://localhost:3000/loginExecutive/getAllPosts', {
        withCredentials: true
      })
      setPost(res2.data.posts)
      console.log(res2.data)
      }
      catch(err2){
        console.log("Both request failed " ,err1,err2)
      }
    
    }
  }

  async function handleDelete(postId){
    try{
     const response=await axios.post('http://localhost:3000/loginExecutive/deletePost',
      {
      params:{
        postId
      }},
      {
      withCredentials:true
     }
    )
    alert("Deleted successfully")
    }
    catch(e){
      console.log(e)
     
    }
  }


  useEffect(() => {
    handleClick()
    AOS.init({ delay: 1000, once: true })
  }, [])

  return (
    <>
    
    
    
    <div style={{fontFamily: "'Playwrite HU', serif",
    backgroundImage: "url('https://images.pexels.com/photos/7233102/pexels-photo-7233102.jpeg?auto=compress&cs=tinysrgb&w=600')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
       backgroundAttachment: 'fixed',
  }} className=" text-[#4F1C51] w-full min-h-screen flex flex-col items-center p-6">

      <button onClick={() => navigate(-1)} className="self-start p-3 bg-[#4F1C51] text-white rounded-lg mb-4">
        Back
      </button>
      <h1 className="text-4xl mt-4 mb-6 font-semibold">POSTS</h1>
      <div className="flex flex-col items-center gap-4 w-full max-w-3xl">
        {posts.map((post, index) => (
          <div key={index} className="bg-blue-100 p-4 rounded-lg shadow-md w-full m-3 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>

            <img className="h-[40vh] w-full object-cover rounded mb-2" src={post.image} alt={`Post titled ${post.title}`} />
          
            <p>{post.content}</p>
           
            <button
              onClick={() => 
                handleSubmit(post._id)}
              className="mt-2 text-red-500 font-semibold"
            >
              ❤️ Like: {post.like}
            </button>
            
            <div className="self-start text-sm mr-12">{new Date(post.date).toLocaleString('en-In')}</div>
            <button onClick={() => handleDelete(post._id)} className="self-end text-sm  w-[15px] h-[15px]"><img src= {del}/></button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}