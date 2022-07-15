const joi =require('joi');

const addschema=  async(req,res)=>{
 try{
        const teamschema= joi.object().keys({
        teamId:joi.number().min(1).max(1000000),
        teamname:joi.string().required(),
        points:joi.number().min(1).max(10000000).required(),
    });
    
    const result= await teamschema.validateAsync(req.body);
    // res.json(result);
}
catch(error){
    
    if (error) {
        console.error(error);
        let errorMessage = error.details
          .map((details) => details.message)
          .join(", ")
          .replace(/"/g, "");
         res.json( errorMessage);
      }
    }
};

const getschema= (req,res) => {
    try{
    const getteams=joi.object().keys({
        teamId:joi.number().required(),
        teamname:joi.string().required(),
        points:joi.number().required(), 
    });

    const value=getteams.validateAsync(req.body);
    console.log(value);
    }
    catch(error){
    
        if (error) {
            console.error(error);
            let errorMessage = error.details
              .map((details) => details.message)
              .join(", ")
              .replace(/"/g, "");
             res.json( errorMessage);
          }
        }
}

const updateSchema =(req,res) => {
    try {

        const updateteam=joi.object().keys({
            teamId:joi.number().required(),
        teamname:joi.string().required(),
        points:joi.number().required(), 

        })
        
    } catch (error) {
        if (error) {
            console.error(error);
            let errorMessage = error.details
              .map((details) => details.message)
              .join(", ")
              .replace(/"/g, "");
             res.json( errorMessage);
          }
        
    }
};


const deleteSchema =(req,res) => {
    try {

        const deleteteam=joi.object().keys({
         teamId:joi.number().required(),
        teamname:joi.string().required(),
        points:joi.number().required(), 

        })
        
    } catch (error) {
        if (error) {
            console.error(error);
            let errorMessage = error.details
              .map((details) => details.message)
              .join(", ")
              .replace(/"/g, "");
             res.json( errorMessage);
          }
        
    }
};



module.exports={
    addschema,
    getschema,
    updateSchema,
    deleteSchema
};