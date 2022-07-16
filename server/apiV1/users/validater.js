const joi =require('joi');

const addschema= (req,res,next)=>{
 try{
        const userschema= joi.object().keys({
        userId:joi.number().min(1).max(1000000),
        username:joi.string().required(),
        points:joi.number().min(1).max(1000000),
    });
    
    const result=  userschema.validateAsync(req.body);
    return next()
 
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

const getschema= (req,res,next) => {
    try{
        const usergetschema= joi.object().keys({
            userId:joi.number().min(1).max(1000000),
    });
     
    const value=usergetschema.validateAsync(req.params);
    return next()
    
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

const updateSchema =(req,res,next) => {
    try {

        const userupdateschema= joi.object().keys({
            userId:joi.number().min(1).max(1000000),
            username:joi.string().required(),
            points:joi.string().min(1).max(100000).required(),

        });
     const val=userupdateschema.validateAsync(req.body);
   return next()
        
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


const deleteSchema =(req,res,next) => {
    try {

        const userdeleteschema= joi.object().keys({
            userId:joi.number().min(1).max(1000000),

        });
        const val=  userdeleteschema.validateAsync(req.params);
     return next()
        
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