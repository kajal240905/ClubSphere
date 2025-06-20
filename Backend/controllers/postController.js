
const Post = require('../models/post'); // assuming you have a Post model

const uploadPost = async (req, res) => {
  try {
    const { title, content,club } = req.body;
    if(!title || !content ||!club){
  return res.status(400).json({message:"Please enter all fields"});
 }

 const authorDetails = req.executive
 console.log(authorDetails)
 if (!authorDetails) {
  return res.status(404).json({ message: "Author not found" });
}
 const findClub=req.executive.club
 if(findClub!==club){
   console.log('You cannot create a post')
 }


    if (!req.file) return res.status(400).json({ error: "Image is required" });

    const newPost = new Post({
      title,
      content,
      club,
      image: req.file.path, // This is Cloudinary URL
      date: Date.now(),
    });

    await newPost.save();

    res.status(200).json({ message: 'Post created successfully', post: newPost });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error during post upload' });
  }
};

module.exports = {
  uploadPost,
};
