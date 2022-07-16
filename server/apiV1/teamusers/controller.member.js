const { required } = require("joi");
const db = require("../models");
const team = require("../models/team");
const member = db.teamusers;
const Team = db.teams;
const User = db.users;

const createMember = async (req, res) => {
  try {
    const datamemeber = {
      teamId: req.query.teamId,
      userId: req.query.userId,
      points: req.query.points,
    };
    //     console.log(datamemeber);

    // const userId=await User.findAll({where:{userId:datamemeber.userId}});
    // const teamId=await Team.findAll({where:{teamId:datamemeber.teamId}});
    // console.log(userId);
    // console.log(teamId);
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
    const result = await Team.findAll({include:User,where:{teamId:id}});
   

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
