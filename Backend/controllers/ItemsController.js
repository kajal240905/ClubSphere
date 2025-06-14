const User=require('../models/user')
const Item=require('../models/items')
const Club=require('../models/club')


const addItem=async(req,res)=>{
    try{
    const {name,quantity,club}=req.body;
    if(!name || !quantity  ){
      return res.status(500).json("Please enter all fields")
    }
  
   
    
    const item1=await Item.findOne({name})
    const clubb=req.executive.club
    console.log(req.executive.club)
    const findClub=await Club.findOne({name:clubb})
    console.log(findClub.name)
    if(!findClub){
      return res.status(500).json("Club Not Found")
    }
    
    if(findClub.name!==club){
      return res.status(400).json('Club is not matching')
    }


    
   
    if(item1){
    item1.quantity=item1.quantity+quantity
   
    await item1.save()
    return res.status(200).json('Added succesfully')
    }
    
    const newItem=new Item({
        name,
        quantity

    })
    await newItem.save()
    findClub.items.push(newItem)
    findClub.save()
return res.status(200).json({message:'Items added successfully'})
    }
    catch(error){
        console.log(error)
       return res.status(500).json("Error"+error.message)
    }
}


const removeItem=async(req,res)=>{
    try{
    const {name,quantity,club}=req.body;
    if(!name || !quantity ||!club){
       return res.status(500).json("Please enter all fields")
    }
  const findClub=req.executive.club
  

    if(!findClub){
      return res.status(500).json("Club Not Found")
    }
    
if(findClub!==club){
  return res.status(500).json("Sorry you can't remove item")
}
const item=await Item.findOne({name})


if(!item){
  return  res.status(500).json('Item Not Found')
}
if(quantity<=item.quantity){
  item.quantity=item.quantity-quantity
  await item.save();
    }
else{
    item.quantity=0;
    await item.save()

}
return res.status(200).json('Item removed successfully')

    
}
    catch(error){
        console.log(error)
      return res.status(500).json("Error"+error.message)
    }

}


const issueItem=async(req,res)=>{
    try{
 const{itemName,userEmail,quantity,club}=req.body;
 if(!itemName || !userEmail || !quantity || !club){
   return res.status(500).json("Please enter all fields")
 }

const user=await User.findOne({email:userEmail})
const item=await Item.findOne({name:itemName})
console.log(item)
const findClub=req.executive.club
if(findClub!==club){
  return res.status(400).json('you cannot issue')
}

if(!user){
    return res.status(500).json("User not found")
}
if(!item){
     return res.status(500).json("Item not found")
}

const itemId=item._id;
const userId=user._id
if(item.quantity<quantity){
   return res.status(500).json("Sorry items are not available")  
}
item.issuedTo.push(userId)
item.quantity=item.quantity-quantity
 await item.save();
 user.issuedItems.push(item)
 await user.save()
 return res.status(200).json("Item issued")
}
  catch(error){
        console.log(error)
      return res.status(500).json("Error"+error.message)
    }


}


const returnItem=async(req,res)=>{
    try{
 const {ItemName,userEmail,quantity,club}=req.body;
 console.log(ItemName);
 
const user=await User.findOne({email:userEmail})
const item=await Item.findOne({name:ItemName})

const findClub=req.executive.club
if(findClub!==club){
  return res.status(400).json('you cannot issue')
}
if(!user){
    return res.status(500).json("User not found")
}
if(!item){
     return res.status(500).json("Item not found")
}

const itemId=item._id;
const userId=user._id

item.issuedTo.pop(userId)
user.issuedItems.pop(itemId)
item.quantity=item.quantity+quantity
item.save();
return res.status(200).json("Item recieved")
}
  catch(error){
        console.log(error)
      return res.status(500).json("Error"+error.message)
    }


}

const getItems = async(req,res)=>{
  try{
  const clubQuery=req.query.clubQuery
  const findClub=await Club.findOne({name:clubQuery})
  
  if(!findClub){
 return res.status(400).json('club not found')
  }
  const itemsId=findClub.items;
  
  const newArray=[]
  for(let i=0;i<itemsId.length;i++){
    const item=await Item.findById(itemsId[i])
    newArray.push(item)
  }
  return res.status(200).json(newArray)


}

 catch(error){
  console.log(error)
  return res.status(500).json("Error"+ error.message)
 }


}


module.exports={addItem,removeItem,issueItem,returnItem ,getItems}


