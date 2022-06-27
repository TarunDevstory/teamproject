const db = require("../models");
const team = db.teams;

const createdata = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({
        message: "Content can not be empty!",
      });
    }
    // Create a team
    const data = {
      name: req.body.name,
      points: req.body.points,
    };
    const value = await team.create(data);
    return res.send({ statusCode: 200, successMessage: "success", data });
  } catch (error) {
    console.error(error);
  }
  
};
const getdata = async(req,res)=>{
    try{
        const id =req.params.id;
        const data= await team.findByPk(id);
        return res.send(data);
   }
    catch(error){
      console.error(error)
    }
};

const updatedata= async(req,res) => {
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

const deletedata = async (req,res) => {
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

module.exports = { createdata,getdata ,updatedata, deletedata};
