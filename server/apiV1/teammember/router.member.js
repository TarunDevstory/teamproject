module.exports=app=>{
    const member=require("./controller.member");
    const router =require("express").Router();
    router.post("/",member.createmember);
    router.get("/:id",member.getmember);
    router.put("/:id",member.updatemember);
    router.delete("/:id",member.deletemember);
    app.use("/api/V1/teammember",router);
}