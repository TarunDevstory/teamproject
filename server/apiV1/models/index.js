const dbconfig=require("../../config/db.config");
const Sequelize=require("sequelize");
const sequelize=new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    HOST:dbconfig.HOST,
    dialect:dbconfig.dialect,
    operatorsAliases:false,
    pool :{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
        acquire:dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
});

const db={}
db.Sequelize=Sequelize,
db.sequelize=sequelize,
db.users=require("./user")(sequelize,Sequelize);
db.teams=require("./team")(sequelize,Sequelize);
db.Teammembers=require("./teammember")(sequelize,Sequelize);
module.exports=db;