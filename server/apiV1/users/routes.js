module.exports=app=>{
    const user=require("../controllers/user");
    const router=require("express").Router();
    router.post("/",user.CreateValue);
    app.use("/user",router);
}