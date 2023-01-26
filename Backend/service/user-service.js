
const pool = require("../db.js")
const bcrypt = require('bcrypt')
const tokenServis = require('./token-service')
//const UserDto = require('../dtos/user-dto')
     exports.registration=(login,password)=>{
      const ff = new Promise((res,rej) => {
           const hashPassword = bcrypt.hashSync(password, process.env.SOLE_PASS)
           pool.query(`SELECT * FROM roles WHERE id=? and password=?`, [login,hashPassword],
           (err, result) => {
              if (err) console.log(err);
          res(result);  
          }); 
      })
      .then((data)=>{    
        if(Object.keys(data).length > 0){ 
        const ttt = {status: data[0].status,id:data[0].id,name:data[0].name,activationLink: true}
        const token = tokenServis.generateTokens(ttt);
        tokenServis.saveToken(data[0].id,token.refreshToken)
        return {
          id:data[0].id,
          name:data[0].name,
          status:data[0].status,
          token}
        
        
        }else{return null}  
      })
    return ff
}
exports.refresh=(accessToken,refreshToken)=> {
  try {
    const dataAccess = tokenServis.validateAccessToken(accessToken);
    const dataRefresh = tokenServis.validateRefreshToken(refreshToken);
     switch(true){
      case (dataAccess === null && dataRefresh === null):
         tokenServis.deleteRefreshToken(refreshToken);
        return {message: 'Пользователь не авторизован',status:5,ss:false}
        break;
      case(dataAccess === null && dataRefresh != null):
         tokenServis.deleteRefreshToken(refreshToken);
        const ttt = {status: dataRefresh.status,id:dataRefresh.id,name:dataRefresh.name,activationLink: true}
        const token = tokenServis.generateTokens(ttt);
        tokenServis.saveToken(dataRefresh.id,token.refreshToken)
        return{
          id:dataRefresh.id,
          name:dataRefresh.name,
          status:dataRefresh.status,
          ss: true,
          token}
      break;  
      case(dataAccess != null):
      return{
        id:dataAccess.id,
        name:dataAccess.name,
        status:dataAccess.status,
        accessToken:accessToken,
        ss: false
        }     
      break;
     }
     

  } catch (e) {
      
  }
}




exports.email_role= async (role)=>{
   const ff = await new Promise((res,rej) => {
    pool.query(
      `SELECT * FROM roles WHERE id = ?`,[role],
      function (err, result) {
          if (err) console.log(err);
        res(result[0].email)
      });
  })
  .then((data)=>{   
         return data
  })

 return ff

}


exports.tasks_update_1 = async (data_start,data_end) => {
  try{

      const rrr = await new Promise((res,rej)=>{
      var D_start = new Date(data_start);
      D_start.setDate(D_start.getDate() + 1);
          pool.query(
              `SELECT * FROM tasks WHERE data_statrt BETWEEN  ? AND  ? ORDER BY id desc`,
              [data_end,D_start],
              function (err, result) {
                  if (err) console.log(err);
                  res(result)
              });  
    })
    .then((data)=>{
      return data
    })
         return rrr
  }catch(e){
      res.json({error:`что то не так ${D_start} c ${D_end}`});
  }
}


exports.tasks_mail_big = async (id_tasks) => {
  try{

      const rrr = await new Promise((res,rej)=>{
          pool.query(
              `SELECT * FROM tasks WHERE id = ?`,
              [id_tasks],
              function (err, result) {
                  if (err) console.log(err);
                  res(result)
              });  
    })
    .then((data)=>{
      return data
    })

    const rrr1 = await new Promise((res,rej)=>{
      pool.query(
        `SELECT * FROM roles WHERE id_department = ? and status = ?`,
        [rrr[0].id_department,1],
        function (err, result) {
            if (err) console.log(err);
            res(result)
        });  
    })
    .then((data) => {
      return data
    })


         return rrr1
  }catch(e){
      res.json({error:`что то не так ${D_start} c ${D_end}`});
  }
}




exports.logout= async(refreshToken)=> {
  tokenServis.deleteRefreshToken(refreshToken)
 


}

         
         //const userDto = new UserDto()