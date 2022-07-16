

module.exports =  (sequelize, Sequelize) => {
   
    
    const user=  sequelize.define("user", {
        userId:{
         primaryKey:true,
         
           type:Sequelize.INTEGER
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

