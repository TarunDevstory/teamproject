module.exports=app=>{
    const validate=require("../users/validater")
    const user=require("./controller.user");
    const router=require("express").Router();
    router.post("/",validate.addschema,user.createValue);
    router.get("/:userId",validate.getschema,user.getValue);
    router.put("/:userId",validate.updateSchema,user.updateValue);
    router.delete("/:userId",validate.deleteSchema,user.deleteValue);
    router.get("/alluser/user",user.allUserdata);
    // router.put("/userdata/user",user.valuePair)
    app.use("/api/V1/user",router);
}