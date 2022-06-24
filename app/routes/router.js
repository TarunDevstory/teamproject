module.exports = app => {
    const team=require("../Controllers/team");
    const router=require("express").Router();
    router.post("/",team.CreateData);
    router.get("/:id",team.GetData);
    router.put("/:id",team.UpdateData);
    router.delete("/:id",team.DeleteData);
    app.use("/api",router);
}