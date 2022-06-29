


module.exports =   (sequelize, Sequelize) => {
    const teamusers = require("./teamusers");
    const team =  sequelize.define("team", {
        teamid:{
           primaryKey:true,
           foreignKey:true,
           type:Sequelize.STRING
        },
        teamname:{
            type:Sequelize.STRING,
        },
        points: {
            type: Sequelize.STRING
        }

    });
   
    
    return team;
};