
const db = require("../models");
const { schema } = require("./validater");
const  userValue=require("../users/controller.user");
const Op = db.Sequelize.Op;

const team = db.teams;
const user = db.users;

const createData = async (req, res,userValue) => {
  try {
    if (!req.body.teamId) {
      return res.status(400).send({
        message: "Content can not be empty!",
      });
    }
      // const addUser={
      //   userId:req.body.userId
      // }

    // const userdata = await user.findOne({
    //   where: { userId: "1"},
    // });

    // Create a team
    const data = {
      teamId: req.body.teamId,
      teamname: req.body.teamname,
      totalpoints: req.body.totalpoints,
      // userId: userdata.userId,
    };
    const value = await team.create(data);
    return res.json(data);
  } catch (error) {
    console.error(error);
  }
};
const getData = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const data = await team.findByPk(teamId);
    return res.send(data);
  } catch (error) {
    console.error(error);
  }
};

const updateData = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const data = await team.update(req.body, {
      where: { teamId: teamId },
    });
    return res.json({message:"sucessfully updated team"});
  } catch (error) {
    console.error(error);
  }
};

const deleteData = async (req, res) => {
  try {
    const teamId = req.params.teamId;
    const data = await team.destroy({
      where: { teamId: teamId },
    });
    return res.json({ message: "delete sucessfully" });
  } catch (error) {
    console.error(error);
  }
};

const allTeamdata = async (req,res) =>{
  try {
    //get all team-name only
    const data= await team.findAll({attributes: ['teamname']});
    res.json(data);
  } catch (error) {
    console.error(error)
    
  }
};

module.exports = { createData, getData, updateData, deleteData, allTeamdata };
