 const OpenAI = require( "openai");
require('dotenv').config()

const openai = new OpenAI({
  apiKey:process.env.AI_API

});



const sessions = {};

const aiChat = async (req, res) => {
  const userId = req.body.userId || req.ip; // use IP if no user ID

  if (!sessions[userId]) {
    sessions[userId] = [];
  }

  const userMsg = req.body.msg;

 
  sessions[userId].push({ role: 'user', content: userMsg });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: sessions[userId],
    });

    const reply = completion.choices[0].message.content;

 
    sessions[userId].push({ role: 'assistant', content: reply });

    return res.json({ reply });
  } catch (e) {
    console.error(e);
    return res.status(500).json('Internal server error');
  }
};



module.exports={
    aiChat
}
