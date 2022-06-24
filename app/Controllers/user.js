const db=require("../models/User.index");
const user=db.users;

const UserCreateData = async (req, res) => {
    try {
      if (!req.body.name) {
        return res.status(400).send({
          message: "Content can not be empty!",
        });
      }
      // Create a Team
      const data = {
        name: req.body.name,
        eamil: req.body.eamil,
      };
      const value = await user.create(data);
      return res.send({ statusCode: 200, successMessage: "success", data });
    } catch (error) {
      console.error(error);
    }
    
  };
  
  module.exports={ UserCreateData}