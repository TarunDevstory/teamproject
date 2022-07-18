const { query } = require("express");
const db=require("../models");
const User=db.users;
const Team=db.teams;

const createValue = async (req, res) => {
    try {
      if (!req.body.username) {
        return res.status(400).send({
          message: "Content can not be empty!",
        });
      }

      // const userdata = await team.findOne({
      //   where: { teamId: "1"},
      // })



      // Create a user
      const data = {
        username: req.body.username,
        points: req.body.points,
       
       
      };
  
   
      const value = await User.create(data);
        return res.send( value);
      
    }  catch (error) {
      console.error(error);
    }
    
  };


 
  const getValue = async(req,res)=>{
      try{
          const userId =req.params.userId;
          const data= await User.findByPk(userId);
          return res.send(data);
     }
      catch(error){
        console.error(error)
      }
  };
  
  const updateValue= async(req,res) => {
    try{
         const userId = req.params.userId;
         const data= await User.update(req.body,{
          where:{ userId: userId }
         });
         return res.json({mesage:"sucessfully updated user"});
    }
    catch(error){
      console.error(error);
    }
  };
  
  const deleteValue = async (req,res) => {
    try{
       const userId=req.params.userId;
       const data = await User.destroy({
        where :{userId:userId}
       })  
       return res.json({message:"delete sucessfully"});
  
    }
    catch(error){
    console.error(error)
  
  }
};
  const getUserdata=async (req,res)=>{
    try{
      //joins methods left join with team and users table
      const result = await User.findAll({ include: Team});
     return res.json(result);
    }
    catch(error)
    {
      console.error(error)
    }
  };


// //passing the key values from one table to another
//     const valuePair =async(req,res) =>{
//       try {
//         const valdata={
//             teamId:req.query.teamId,
//             userId:req.query.userId
//         }
//         console.log(valdata);
        
//         // const datauser= await User.update(req.query,{where:{userId:valdata.userId}},{$set:{teamId:valdata.teamId}});
//         const datauser= await User.update(req.query,{where:{userId:valdata.userId}},{$set:{teamId:valdata.teamId}});
//          res.json({message:'user added sucessfully'});
        
//       } catch (error) {
                
//         console.error(error);
        
//       }
//     };


const allUserdata = async (req,res) =>{
  try {
    //get all team-name only
    const data= await User.findAll({attributes: ['username']});
    res.json(data);
  } catch (error) {
    console.error(error)
    
  }
};
  
  
  
  module.exports={ createValue,getValue,deleteValue,updateValue,allUserdata};