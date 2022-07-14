module.exports=app=>{
    const member=require("./controller.member");
    const validate=require("./validater");
    const router =require("express").Router();
    router.post("/",member.createMember);
    router.get("/:id",member.getMember);
    router.put("/:id",member.updateMember);
    router.delete("/:id",member.deleteMember);
    app.use("/api/V1/teamusers",router);
}