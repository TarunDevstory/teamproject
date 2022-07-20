


module.exports =   (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        teamId:{
          primaryKey:true,
          autoIncrement:true,
           type:Sequelize.INTEGER,
           allowNull:false
        },
        teamname:{
            type:Sequelize.STRING,
            unique:true
        }
        
    },
    { timestamps:false}
   
    );
    
    
    return team;
};