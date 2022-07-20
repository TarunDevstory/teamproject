const joi =require('joi');

const addschema=  (req,res,next)=>{
 try{
        const teamschema= joi.object().keys({
        teamId:joi.number().min(1).max(1000000),
        teamname:joi.string().required(),
    });
    
    const result= teamschema.validateAsync(req.body);
    
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
    return next();
};

const getschema= (req,res,next) => {
    try{
    const getteams=joi.object().keys({
        teamId:joi.number().required(),
    });

    const value=getteams.validateAsync(req.params);
   
    }
    catch(error){
    
    
            console.error(error);
            let errorMessage = error.details
              .map((details) => details.message)
              .join(", ")
              .replace(/"/g, "");
             res.json( errorMessage);
          
        }
        return next();
};

const updateSchema = (req,res,next) => {
    try {

        const updateteam=joi.object().keys({
            teamId:joi.number().required(),
        teamname:joi.string().required(),

        })
        const value =updateteam.validateAsync(req.body);
        
    }
     catch (error) {
        if (error) {
            console.error(error);
            let errorMessage = error.details
              .map((details) => details.message)
              .join(", ")
              .replace(/"/g, "");
              res.json( errorMessage);
          }
        // console.error(error);
    }
    return next();
};


const deleteSchema = (req,res,next) => {
    try {

        const deleteteam=joi.object().keys({
         teamId:joi.number().min(1).max(10000),

        })
        const deleting=deleteteam.validateAsync(req.params);
       
        
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
    return next();
};



module.exports={
    addschema,
    getschema,
    updateSchema,
    deleteSchema
};