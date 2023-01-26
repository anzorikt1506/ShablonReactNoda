const pool = require("../db.js")
const UserServis = require('../service/user-service')

    exports.registration = (req,res,next) => {
        try{
            new Promise((res,rej) =>{
                const {login,password} = req.body
               // const {refreshToken} = req.cookies
                const ff  = UserServis.registration(login,password)    
                res(ff)
            })
            .then((data)=>{
                if(data != null){
                    res.cookie('refreshToken ',data.token.refreshToken ,{maxAge:30*24*60*60*1000, httpOnly:true}).json(data)
                    
                }else{
                    res.status(401).json({error:'Неверный пароль'});
                }
                 
            })
           
        }catch(e){
            res.json({error:e});
        }
    }
    

    exports.refresh = (req,res,next) =>{
        try{
            const {refreshToken} = req.cookies
            const authorizationHeader = req.headers.authorization;
          if(authorizationHeader){
            const accessToken = authorizationHeader.split(' ')[1];
            const avtorVerith =  UserServis.refresh(accessToken,refreshToken)
            if(avtorVerith.ss === true){
               res.cookie('refreshToken ',avtorVerith.token.refreshToken ,{maxAge:30*24*60*60*1000, httpOnly:true}).json(avtorVerith) 
            }else{res.json(avtorVerith) }
            
          } else{res.json({error:'Нет нужных данных'});} 

        }catch(e){
            res.json({error:`${e} что то не так`});
        }
    }
    
    exports.logout= async(req,res,next) => {
        try{
            const {refreshToken} = req.cookies;
           UserServis.logout(refreshToken)
          res.clearCookie('refreshToken').json({message:'Вы вышли'})
          
        }catch(e){
            res.json({error:`${e} что то не так`});
        }
    }
    
    // exports.refresh=(req,res,next)=>{
    //     try{

    //     }catch(e){
            
    //     }
    // }
    
    // exports.getUsers=(req,res,next)=>{
    //     try{

    //     }catch(e){
            
    //     }
    // }
   
