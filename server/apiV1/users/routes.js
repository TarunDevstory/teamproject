module.exports=app=>{
    const user=require("./comtroller.user");
    const router=require("express").Router();
    router.post("/",user.createvalue);
    router.get("/:id",user.getvalue);
    router.put("/:id",user.updatevalue);
    router.delete("/:id",user.deletevalue);
    app.use("/user",router);
}