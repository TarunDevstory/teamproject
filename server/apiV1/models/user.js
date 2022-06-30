


module.exports =  (sequelize, Sequelize) => {
    const user=  sequelize.define("user", {
        userid:{
         foreignKey:true,
        
           type:Sequelize.STRING
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

