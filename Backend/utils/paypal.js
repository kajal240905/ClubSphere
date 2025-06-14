const axios=require('axios')
require('dotenv').config()

const {PAY_CLIENT_ID,PAY_SECRET,PAY_API}=process.env

async function generateAccessToken(){

 const auth=Buffer.from(`${PAY_CLIENT_ID}:${PAY_SECRET}`).toString("base64")
 const response = await axios.post(`${PAY_API}/v1/oauth2/token`,
  'grant-type=client_credentials',{
    headers:{
      'Authorization':`Basic ${auth}`,
      'Content-type':'application/x-www-form-urlencoded'

    }
  }

  
 )
 return res.data.access_token

}


module.exports={generateAccessToken}