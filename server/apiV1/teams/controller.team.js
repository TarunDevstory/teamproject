const db = require("../models");
const team = db.teams;

const createData = async (req, res) => {
  try {
    if (!req.body.teamId) {
      return res.status(400).send({
        message: "Content can not be empty!",
      });
    }
    // Create a team
    const data = {
      teamId:req.body.teamId,
      teamname: req.body.teamname,
      points: req.body.points,
    };
    const value = await team.create(data);
    return res.send(data);
  } catch (error) {
    console.error(error);
  }
  
};
const getData = async(req,res)=>{
    try{
        const id =req.params.id;
        const data= await team.findByPk(id);
        return res.send(data);
   }
    catch(error){
      console.error(error)
    }
};

const updateData= async(req,res) => {
  try{
       const id = req.params.id;
       const data= await team.update(req.body,{
        where:{ id: id }
       });
       return res.send(data);
  }
  catch(error){
    console.error(error);
  }
};

const deleteData = async (req,res) => {
  try{
     const id=req.params.id;
     const data = await team.destroy({
      where :{id:id}
     })  
     return res.json({message:"delete sucessfully"});

  }
  catch(error){
  console.error(error)

}
};

module.exports = { createData,getData ,updateData, deleteData};
