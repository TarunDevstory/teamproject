
module.exports = app => {
    const validate=require("./validater");
    const team=require("./controller.team");
    const router=require("express").Router();
    router.post("/",team.createData);
    router.get("/:teamId",team.getData);
    router.put("/:teamId",team.updateData);
    router.delete("/:teamId",team.deleteData);
    router.get("/allteam/teams",team.allTeamdata)
    app.use("/api/V1/team",router);
}