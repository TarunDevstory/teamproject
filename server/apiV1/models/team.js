module.exports = (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        name:{
            type:Sequelize.STRING
        },
        points: {
            type: Sequelize.STRING
        }

    });
  
    return team;
};