import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AddPost() {
  const navigate = useNavigate('/');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [club, setClub] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title || !content || !club || !image) {
      alert("Please fill all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('club', club);
    formData.append('image', image);

    try {
      const response = await axios.post(
        'https://clubsphere-production.up.railway.app/loginExecutive/addPost',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      alert("Post added successfully!");
      navigate('/adminPower');
    } catch (e) {
      console.error(e);
      alert("Failed to add post.");
    }
  }

  return (
    <div  style={{ fontFamily: "'Playwrite HU', serif" }}className="bg-zinc-700 min-h-screen w-full overflow-hidden flex flex-col items-center">
      <button
        className="text-white bg-[#B026FF] p-2 rounded-xl self-start mt-3 ml-3 hover:bg-purple-900 hover:cursor-pointer"
        onClick={() => navigate('/adminPower')}
      >
        Back
      </button>
      <div
        
        className="md:w-[40vw] w-[80vw] h-full rounded-xl text-[#B026FF] bg-zinc-900 mt-6 pb-4 shadow-[0_0_12px_#B026FF] mb-8"
      >
        <h1 className="text-4xl text-center p-4">Add Post</h1>
        <form
          onSubmit={handleSubmit}
          style={{ fontFamily: "'Poppins', sans-serif" }}
          className="m-12 mt-4 rounded-xl"
          encType="multipart/form-data"
        >
          <label htmlFor="title" className="mb-1 mt-2 block font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="bg-white p-2 rounded-xl w-full text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
          />

          <label htmlFor="club" className="mb-1 mt-2 block font-medium">
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

          <label htmlFor="content" className="mb-1 mt-2 block font-medium">
            Content
          </label>
          <textarea
            id="content"
            className="bg-white p-2 rounded-xl w-full text-black"
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter post content"
          />

          <label htmlFor="image" className="mb-1  mt-2 block font-medium">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="bg-white p-2 rounded-xl w-full text-black"
          />

          <button
            type="submit"
            className="bg-[#B026FF] my-6 text-center p-3 text-white rounded-3xl w-full hover:bg-purple-900 hover:cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
