const { required } = require("joi");
const { teamusers } = require("../models");
const db = require("../models");
const team = require("../models/team");
const Member = db.teamusers;
const Team = db.teams;
const User = db.users;

const createMember = async (req, res) => {

  try {

    if(!req.params.teamId && req.params.userId)
    {
      return res.json({message:'empty values'});
    }
    const datamemeber = {
      teamId: req.query.teamId,
      userId: req.query.userId,
    };
    
    const id=datamemeber.teamId;
    const Id=datamemeber.userId;
  
  
    const teamdata=await Team.findByPk(id,{where:{teamId:id}});
    const userdata=await User.findByPk(Id,{where:{userId:Id}});
    // console.log(teamdata.teamId);
    // console.log(userdata.userid);
    if(teamdata.teamId == id && userdata.userId == Id)
    {
      const value = await Member.create(datamemeber);
      return res.send(value);
    }
    else if(!teamdata.teamId == id && userdata.userId == Id){
     return res.json({message:"wrong output"});
    }
  } catch (error) {
    console.error(error);
  }
};

const getMember = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Member.findByPk(id);
    return res.send(data);
  } catch (error) {
    console.error(error);
  }
};

const updateMember = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Member.update(req.body, {
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
    const data = await Member.destory({
      where: { id: id },
    });
    return res.json({ message: "memeber is deleted sucessfully" });
  } catch (error) {
    console.error(error);
  }
};

const getUserdata = async (req, res) => {
  try {
    //joins methods left join with team and users table
    const result = await Team.findAll({ include: User });
    return res.json(result);
  } catch (error) {
    console.error(error);
  }
};

const teamdata = async (req, res) => {
  try {
    const id = req.params.id;
   //joins getting particular team and their users;
    // const result = await Team.findOne({include:User,where:{teamId:id}});
    const result= await Team.findByPk(id, {
      include: [
        {
          model: User,
          as: "users",
          attributes: ["userId","username","points"],
          through: {
            attributes: [],
          },
        },
      ],
    })


    res.json(result);
  } catch (error) {
    console.error(error);
  }
};





module.exports = {
  createMember,
  getMember,
  updateMember,
  deleteMember,
  getUserdata,
  teamdata,
};
