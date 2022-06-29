const { Model} = require('sequelize');


module.exports =  (sequelize, Sequelize) => {
    const teamusers=require("./teamusers")
    const user=  sequelize.define("user", {
        userid:{
           primaryKey:true,
           foreignKey:true,
           type:Sequelize.STRING
        },
        username:{
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING,
            unique:true
        }
       
        
});
 
 
  
    return user;
};

