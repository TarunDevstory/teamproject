module.exports = app => {
    const team=require("./controller.team");
    const router=require("express").Router();
    router.post("/",team.createdata);
    router.get("/:id",team.getdata);
    router.put("/:id",team.updatedata);
    router.delete("/:id",team.deletedata);
    app.use("/team",router);
}