

module.exports =  (sequelize, Sequelize) => {
    const teamusers=  sequelize.define("teamusers", {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true

        },      
    },
    { timestamps:false}
    );

   
    return teamusers;
  
};