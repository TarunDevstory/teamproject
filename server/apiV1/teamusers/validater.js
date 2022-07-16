// const joi =require('joi');

// const autoSchema= (req,res)=>{
//         const teamschema= joi.object().keys({
//         points:joi.number().min(1).max(1000000).required(),
//         userId:joi.number().min(1).max(1000000).required(),
//         teamId:joi.number().min(1).max(1000000).required(),
//     });
//     console.log(teamschema);
//     const val = teamschema.validateAsync(req.query);
//     console.log(val);
// }

// module.exports={
//     autoSchema
// };