


module.exports =   (sequelize, Sequelize) => {
    const team =  sequelize.define("team", {
        // id:{
        //     type:Sequelize.INTEGER,
        //     autoIncrement:true,
        //     primaryKey:true
        // },
        teamId:{
          primaryKey:true,
        // foreignKey:true,
        // allowNull:false,
           type:Sequelize.INTEGER
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