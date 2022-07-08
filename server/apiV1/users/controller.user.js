const db=require("../models");
const user=db.users;

const createValue = async (req, res) => {
    try {
      if (!req.body.userId) {
        return res.status(400).send({
          message: "Content can not be empty!",
        });
      }
      // Create a user
      const data = {
        userId:req.body.userId,
        username: req.body.username,
        email: req.body.email,
      };
      console.log(data);
      const value = await user.create(data);
        return res.send( data);
      
    }  catch (error) {
      console.error(error);
    }
    
  };


 
  const getValue = async(req,res)=>{
      try{
          const id =req.params.id;
          const data= await user.findByPk(id);
          return res.send(data);
     }
      catch(error){
        console.error(error)
      }
  };
  
  const updateValue= async(req,res) => {
    try{
         const id = req.params.id;
         const data= await user.update(req.body,{
          where:{ id: id }
         });
         return res.send(data);
    }
    catch(error){
      console.error(error);
    }
  };
  
  const deleteValue = async (req,res) => {
    try{
       const id=req.params.id;
       const data = await user.destroy({
        where :{id:id}
       })  
       return res.json({message:"delete sucessfully"});
  
    }
    catch(error){
    console.error(error)
  
  }
  };
  
  module.exports={ createValue,getValue,deleteValue,updateValue};