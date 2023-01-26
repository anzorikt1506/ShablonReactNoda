const pool = require("../db.js")
const jwt = require('jsonwebtoken')

  exports.generateTokens= (payload)=>{
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn:'30d'})
      const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn:'30d'})
      return{
        accessToken,
        refreshToken
      }
  }

  exports.deleteRefreshToken=(RefreshToken)=>{
    pool.query(`DELETE FROM token WHERE refreshToken = ?`,RefreshToken);
}

exports.findRefreshToken=(RefreshToken)=>{
  const ss = new Promise((resolve,reject)=>{
    pool.query(`Select * FROM token WHERE refreshToken = ?`,RefreshToken,
    (err, result) => {
      if (err) console.log(err);
      resolve(Object.keys(result).length);  
  });
  })
  .then((data)=>{
    return data
  })
  return ss
}

  exports.deleteRefreshTokenOLD=()=>{
          let now = new Date();
          let now1 = now.setDate(now.getDate()-30);
          let ff = new Date(now1)
          let dateOld =   `${ff.getFullYear()}-${ff.getMonth()+1}-${ff.getDate()}`
          pool.query(`DELETE FROM token WHERE DATE(data) < ?`,dateOld);

  }
  exports.saveToken=(rolesId,refreshTokenNew)=>{
        this.deleteRefreshTokenOLD();
        pool.query(`INSERT INTO token (roles,refreshToken) VALUES (?,?)`,[rolesId,refreshTokenNew]);
  }

  exports.validateAccessToken=(token)=> {
    try {
        const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
        return userData;
    } catch (e) {
        return null;
    }
}

exports.validateRefreshToken=(token)=> {
    try {
        const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
        return userData;
    } catch (e) {
        return null;
    }
}




//SELECT * FROM `tasks` WHERE data_statrt=(SELECT MIN(data_statrt) FROM tasks)
