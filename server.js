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

const db=require("./server/apiV1/models/index");
db.sequelize.sync();

app.get("/",(req,res) => {
    res.json({message:"working on my project"});
});

const router=require("./server/apiV1/teams/router")(app);
const routes=require("./server/apiV1/users/routes")(app);
const memberroutes=require("./server/apiV1/teammmenber/router.member")(app);
//require("./server/apiV1/users/routes")(app);
//require("./app/routes/routes.js")(app);

const PORT=process.env.PORT || 8081;
app.listen(PORT,() => {
    console.log(`server is runing on ${PORT}..`);
})
