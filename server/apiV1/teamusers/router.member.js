module.exports=app=>{
    const member=require("./controller.member");

    const router =require("express").Router();
    router.post("/",member.createMember);
    router.get("/:id",member.getMember);
    router.put("/:id",member.updateMember);
    router.delete("/:id",member.deleteMember);
    router.get("/team/allusers",member.getUserdata)
    app.use("/api/V1/teamusers",router);
}