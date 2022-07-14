module.exports=app=>{
    const user=require("./controller.user");
    const router=require("express").Router();
    router.post("/",user.createValue);
    router.get("/:userId",user.getValue);
    router.put("/:userId",user.updateValue);
    router.delete("/:userId",user.deleteValue);
    router.get("/alluser/user",user.getUserdata);
    router.put("/userdata/user",user.valuePair)
    app.use("/api/V1/user",router);
}