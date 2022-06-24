

module.exports = async (sequelize, Sequelize) => {
    const user=  sequelize.define("user", {
        name:{
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING
        }

    });
    await user.sync();
    return user;
};

