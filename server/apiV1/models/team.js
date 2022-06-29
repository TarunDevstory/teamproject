


module.exports =   (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        teamid:{
        
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