const multer=require('multer')
const path=require('path')


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
  cb(null,'uploads/')
    },
    filename: (req, file, cb) => {
  cb(null, Date.now() + '-' + file.originalname);
}
})

const upload=multer({storage})

const uploadImage=(req,res)=>{
    if(!req.file){
        return res.status(500).json('file not found')
    }
    return res.status(200).json({
        message:'Image uploaded successfully',
        filepath:`http://localhost:3000/uploads/${req.file.filename}`
    })
}
module.exports={
    upload,uploadImage
}


