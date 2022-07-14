const joi =require('joi');

const autoSchema= (req,res)=>{
        const teamschema= joi.object().keys({
        points:joi.number().min(1).max(1000000),
    });
    console.log(teamschema);
}

module.exports={
    autoSchema
};