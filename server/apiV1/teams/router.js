
module.exports = app => {
    const validate=require("./validater");
    const team=require("./controller.team");
    const router=require("express").Router();
    router.post("/",validate.addschema,team.createData);
    router.get("/:teamId",validate.getschema,team.getData);
    router.put("/:teamId",validate.updateSchema,team.updateData);
    router.delete("/:teamId",validate.deleteSchema,team.deleteData);
    router.get("/allteam/teams",team.allTeamdata)
    app.use("/api/V1/team",router);
}