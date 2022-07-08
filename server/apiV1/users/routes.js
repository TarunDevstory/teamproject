module.exports=app=>{
    const user=require("./controller.user");
    const router=require("express").Router();
    router.post("/",user.createValue);
    router.get("/:id",user.getValue);
    router.put("/:id",user.updateValue);
    router.delete("/:id",user.deleteValue);
    app.use("/api/V1/user",router);
}