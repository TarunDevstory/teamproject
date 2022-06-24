const express=require("express")
const app=express();
const dotenv=require("dotenv");
const cors=require("cors");

var coreOptions ={
    origin:"http//localhost:8081"
}

//dotenv.config();

app.use(cors(coreOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db=require("./app/models/team.index");
db.sequelize.sync();

app.get("/",(req,res) => {
    res.json({message:"working on my project"});
});

require("./app/routes/router")(app);
require("./app/routes/routes")(app);

const PORT=process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(`server is runing on ${PORT}..`);
})
