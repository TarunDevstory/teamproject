//const dbconfig=require("../../config/db.config");
const Sequelize=require("sequelize");
const dotenv=require("dotenv");
dotenv.config();
const sequelize=new Sequelize(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASSWORD,{
    HOST:process.env.DB_HOST,
    dialect:process.env.DB_dialect,
    operatorsAliases:false,
    pool :{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

const db={}
db.Sequelize=Sequelize,
db.sequelize=sequelize,
db.users=require("./user")(sequelize,Sequelize);
db.teams=require("./team")(sequelize,Sequelize);
db.Teammembers=require("./teammember")(sequelize,Sequelize);
module.exports=db;