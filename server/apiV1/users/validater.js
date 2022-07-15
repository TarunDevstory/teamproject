const joi =require('joi');

const addschema=  async(req,res)=>{
 try{
        const userschema= joi.object().keys({
        userId:joi.number().min(1).max(1000000),
        username:joi.string().required(),
        email:joi.string().required(),
    });
    
    const result= await userschema.validateAsync(req.body);
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
        const usergetschema= joi.object().keys({
            userId:joi.number().min(1).max(1000000),
            username:joi.string().required(),
            email:joi.string().required(),
    });

    const value=usergetschema.validateAsync(req.body);
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
};

const updateSchema =(req,res) => {
    try {

        const userupdateschema= joi.object().keys({
            userId:joi.number().min(1).max(1000000),
            username:joi.string().required(),
            email:joi.string().required(),

        });
     const val=userupdateschema.validateAsync(req.body);
        
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

        const userdeleteschema= joi.object().keys({
            userId:joi.number().min(1).max(1000000),
            username:joi.string().required(),
            email:joi.string().required(),

        });
        const val=userdeleteschema.validateAsync(req.body);
        
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