const Sequelize=require("sequelize");
const fs=require("fs");
const path=require("path");
const basename=path.basename(__dirname);
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
db.teamusers=require("./teamusers")(sequelize,Sequelize);


db.users.hasOne(db.teamusers);
db.teams.hasOne(db.teamusers);
db.teamusers.belongsTo(db.users);
db.teamusers.belongsTo(db.teams);

module.exports=db;