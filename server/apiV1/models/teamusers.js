

module.exports =  (sequelize, Sequelize) => {
    const teamusers=  sequelize.define("teamusers", {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true

        },
        points:{
            type:Sequelize.INTEGER
        },
        
        
        
    },
    { timestamps:false}
    );

   
    return teamusers;
  
};