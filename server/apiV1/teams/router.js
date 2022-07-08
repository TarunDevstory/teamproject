module.exports = app => {
    const team=require("./controller.team");
    const router=require("express").Router();
    router.post("/",team.createData);
    router.get("/:id",team.getData);
    router.put("/:id",team.updateData);
    router.delete("/:id",team.deleteData);
    app.use("/api/V1/team",router);
}