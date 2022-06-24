module.exports = (sequelize, Sequelize) => {
    const user=  sequelize.define("user", {
        name:{
            type:Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }

    });
    return user;
};