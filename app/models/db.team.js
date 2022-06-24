module.exports = (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        name:{
            type:Sequelize.STRING
        },
        points: {
            type: Sequelize.STRING
        }

    });
    //await team.sync();
    return team;
};