
const pool = require("../db.js")
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenServis = require('./token-service')
//const UserDto = require('../dtos/user-dto')
//      exports.registration=(login,password)=>{
//       const ff = new Promise((res,rej) => {
//            const hashPassword = bcrypt.hashSync(password, process.env.SOLE_PASS)
//            pool.query(`SELECT * FROM roles WHERE id=? and password=?`, [login,hashPassword],
//            (err, result) => {
//               if (err) console.log(err);
//           res(result);  
//           }); 
//       })
//       .then((data)=>{    
//         if(Object.keys(data).length > 0){ 
//         const ttt = {status: data[0].status,id:data[0].id,name:data[0].name,activationLink: true}
//         const token = tokenServis.generateTokens(ttt);
//         tokenServis.saveToken(data[0].id,token.refreshToken)
//         return {
//           id:data[0].id,
//           name:data[0].name,
//           status:data[0].status,
//           token}
        
        
//         }else{return null}  
//       })
//     return ff
// }
