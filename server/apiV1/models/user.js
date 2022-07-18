

module.exports =  (sequelize, Sequelize) => {
   
    
    const user=  sequelize.define("user", {
        userId:{
         primaryKey:true,
         autoIncrement:true,
           type:Sequelize.INTEGER,
           allowNull:false
        },
        username:{
            type:Sequelize.STRING
        },
        points: {
            type:Sequelize.INTEGER,
           
        }

            
},

{ timestamps:false}
);





 
  
    return user;
};

