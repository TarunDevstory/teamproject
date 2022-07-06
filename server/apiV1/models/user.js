

module.exports =  (sequelize, Sequelize) => {
   
    
    const user=  sequelize.define("user", {
        userId:{
         primaryKey:true,
         
           type:Sequelize.INTEGER
        },
        username:{
            type:Sequelize.STRING
        },
        email: {
            type:Sequelize.STRING,
            unique:true
        }

            
});





 
  
    return user;
};

