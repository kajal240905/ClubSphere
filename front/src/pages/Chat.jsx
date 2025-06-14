import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

export default function Chat() {
  const navigate = useNavigate();
  const [reply, setReply] = useState('');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    try {
      const res1 = await axios.post('https://clubsphere-production.up.railway.app/login/aiChat',
        { msg },
        { withCredentials: true }
      );
      setReply(res1.data.reply);
      console.log(res1.data.reply);
    } catch (e1) {
      try{
      const res2 = await axios.post('https://clubsphere-production.up.railway.app/loginExecutive/aiChat',
        { msg },
        { withCredentials: true }
      );
      setReply(res2.data.reply);
      console.log(res2.data.reply);
    }
    catch(e2){
      console.log("Both requests failed",e1,e2)
    }
     
    }
  }

  return (
    <div className="bg-zinc-900 w-full min-h-screen text-white flex flex-col items-center px-4 py-6 overflow-auto">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/allClubs')}
        className="bg-zinc-700 text-white mb-6 px-4 py-2 rounded-xl self-start"
      >
        Back
      </button>

      {/* Reply Section */}
      {reply && (
        <div className="w-full max-w-4xl mb-6 bg-zinc-800 p-4 rounded-xl overflow-x-auto">
          <div className="text-green-400 font-semibold mb-2">ChatGPT said:</div>
          <ReactMarkdown rehypePlugins={[rehypeSanitize]}>{reply}</ReactMarkdown>
        </div>
      )}

      {/* Input Section */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl flex items-center gap-3 mt-auto"
      >
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          className="flex-grow rounded-3xl bg-zinc-600 px-4 md:py-4 py-2 focus:outline-none"
          type="text"
          placeholder="Ask anything"
        />
        <button
          type="submit"
          className="bg-zinc-400 text-black px-4 py-2 rounded-xl"
        >
          Send
        </button>
      </form>
    </div>
  );
}
