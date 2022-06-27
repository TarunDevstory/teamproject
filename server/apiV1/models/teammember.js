
module.exports =  (sequelize, Sequelize) => {
    const teammember=  sequelize.define("teammember", {
        username:{
            type:Sequelize.STRING
        },
        points: {
            type:Sequelize.STRING
        }

    });
    
    return teammember;
};