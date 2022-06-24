module.exports=app=>{
    const user=require("../Controllers/user");
    const router=require("express").Router();
    router.post("/user",user.UserCreateData);
    app.use("/api",router);
}