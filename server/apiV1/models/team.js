


module.exports =   (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        teamid:{
           
          foreignKey:true,
           type:Sequelize.STRING
        },
        teamname:{
            type:Sequelize.STRING,
            unique:true
        },
        points: {
            type: Sequelize.STRING
        }

    });
   
    
    return team;
};