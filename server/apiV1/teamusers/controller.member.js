const db = require("../models");
const member = db.teamusers;
const team = db.teams;
const user = db.users;

const createMember = async (req, res) => {
  try {
    if (!req.body.points) {
      return res.status("your input is empty");
    }

    const teamdata = await team.findOne({
      where: { teamId: "1"},
    });
    const userdata = await user.findOne({
      where: { userId:"1" },
    });

    console.log("team:", teamdata.teamname);
    console.log("user:", userdata.username);

    const datamemeber = {
      points: req.body.points,
      userId: userdata.userId,
      teamId: teamdata.teamId,
    };

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

module.exports = { createMember, getMember, updateMember, deleteMember };
