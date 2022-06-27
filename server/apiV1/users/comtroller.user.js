const db=require("../apiV1/models");
const user=db.users;

const createvalue = async (req, res) => {
    try {
      if (!req.body.name) {
        return res.status(400).send({
          message: "Content can not be empty!",
        });
      }
      // Create a user
      const data = {
        name: req.body.name,
        email: req.body.email,
      };
      console.log(data);
      const value = await user.create(data);
        return res.send( data);
      
    }  catch (error) {
      console.error(error);
    }
    
  };


 
  const getvalue = async(req,res)=>{
      try{
          const id =req.params.id;
          const data= await user.findByPk(id);
          return res.send(data);
     }
      catch(error){
        console.error(error)
      }
  };
  
  const updatevalue= async(req,res) => {
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
  
  const deletevalue = async (req,res) => {
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
  
  module.exports={ createvalue,getvalue,deletevalue,updatevalue};