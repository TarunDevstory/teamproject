

module.exports =   (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        teamname:{
            type:Sequelize.STRING
        },
        points: {
            type: Sequelize.STRING
        }

    });
    
    return team;
};