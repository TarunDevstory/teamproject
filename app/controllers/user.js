const db=require("../models/user.index");
const user=db.users;

const CreateValue = async (req, res) => {
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
  
  module.exports={ CreateValue};