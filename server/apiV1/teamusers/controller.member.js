const { required } = require("joi");
const { teamusers, sequelize } = require("../models");
const db = require("../models");
const team = require("../models/team");
const user = require("../models/user");
const Member = db.teamusers;
const Team = db.teams;
const User = db.users;

const createMember = async (req, res) => {
  try {
    if (!req.params.teamId && req.params.userId) {
      return res.json({ message: "empty values" });
    }
    const datamemeber = {
      teamId: req.query.teamId,
      userId: req.query.userId,
    };

    const id = datamemeber.teamId;
    const Id = datamemeber.userId;

    const teamdata = await Team.findByPk(id, { where: { teamId: id } });
    const userdata = await User.findByPk(Id, { where: { userId: Id } });
    // console.log(teamdata.teamId);
    // console.log(userdata.userid);
    if (teamdata.teamId == id && userdata.userId == Id) {
      const value = await Member.create(datamemeber);
      return res.send(value);
    } else if (!teamdata.teamId == id && userdata.userId == Id) {
      return res.json({ message: "wrong output" });
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
    const sumPoints = await Team.findByPk(id,{
      attributes: [
        "teamId",
        "teamname",
          
            [sequelize.literal(
              `(select  sum(users.points) from users where users.userId IN (select teamusers.userId from teamusers where teamusers.teamId=${id}))`),'totalpoints']]
      ,
      include: [
        {
          model: User,
          as: "users",
          attributes: ["userId", "username", "points"],
          through: {
            attributes: [],

          },
        },
        
      ],

    });

    res.json(sumPoints);
  } catch (error) {
    console.error(error);
  }
};


// select t2.stanje_id,t2.naziv,SUM(t.iznos) 
// from transakcija t 
// INNER JOIN stanje_transakcija t1 on t.transakcija_id = t1.transakcija_id
// INNER JOIN stanje t2 on t2.stanje_id = t1.stanje_id
// GROUP BY t2.stanje_id,t2.naziv


module.exports = {
  createMember,
  getMember,
  updateMember,
  deleteMember,
  getUserdata,
  teamdata,
};
