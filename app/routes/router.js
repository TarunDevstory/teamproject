module.exports = app => {
    const team=require("../controllers/team");
    const user=require("../controllers/user");
    const router=require("express").Router();
    router.post("/",team.CreateData);
    router.post("/user",user.CreateValue)
    router.get("/:id",team.GetData);
    router.put("/:id",team.UpdateData);
    
    router.delete("/:id",team.DeleteData);
    app.use("/team",router);
}