// const joi =require('joi');

// const addschema= (req,res)=>{
//         const teamschema= joi.object().keys({
//         teamId:joi.number().min(1).max(1000000),
//         teamname:joi.string().required(),
//         points:joi.number().required(),
//     });
    
  
//     // console.log(result);
    
// }

// const getschema= (req,res) => {
//     const getteams=joi.object().keys({
//         teamId:joi.number().min(1).max(1000000),
//         teamname:joi.string().required(),
//         points:joi.number().required(), 
//     });

//     const value=getteams.validateAsync(req.body);
//     console.log(value);

// }



// module.exports={
//     addschema,
//     getschema
// };