


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
        },
        totalpoints: {
            type: Sequelize.INTEGER
        }
        
    },
    { timestamps:false}
   
    );
    
    
    return team;
};