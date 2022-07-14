const db = require("../models");
const member = db.teamusers;
const Team = db.teams;
const User = db.users;

const createMember = async (req, res) => {
  try {
   
        const datamemeber={
            teamId:req.query.teamId,
            userId:req.query.userId,
            points:req.query.points
        }
        console.log(datamemeber);
        
        // // const datauser= await User.update(req.query,{where:{userId:valdata.userId}},{$set:{teamId:valdata.teamId}});
        // const datauser= await User.update(req.query,{where:{userId:valdata.userId}},{$set:{teamId:valdata.teamId}});
        //  res.json({message:'user added sucessfully'});
    

    const value = await member.create(datamemeber);
    return res.send(datamemeber);
  } catch (error) {
    console.error(error);
  }
};


const getMember = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await member.findByPk(id);
    return res.send(data);
  } catch (error) {
    console.error(error);
  }
};

const updateMember = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await member.update(req.body, {
      where: { id: id },
    });
    return res.send(data);
  } catch (error) {
    console.error(error);
  }
};

const deleteMember = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await member.destory({
      where: { id: id },
    });
    return res.json({ message: "memeber is deleted sucessfully" });
  } catch (error) {
    console.error(error);
  }
};

const getUserdata=async (req,res)=>{
  try{
    //joins methods left join with team and users table
    const result = await Team.findAll({ include: User});
   return res.json(result);
  }
  catch(error)
  {
    console.error(error)
  }
};

module.exports = { createMember, getMember, updateMember, deleteMember ,getUserdata};
