

const user=require("../models/user");
const team=require("../models/team");

module.exports =  (sequelize, Sequelize) => {
    const teamusers=  sequelize.define("teamusers", {
        id:{
            type:Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey:true

        },
        points:{
            type:Sequelize.STRING
        },
        
        
        
    },
    { timestamps:false}
    );

    
    return teamusers;
  
};