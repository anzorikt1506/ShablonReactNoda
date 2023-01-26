const pool = require("../db.js")
const UserServis = require('../service/user-service')
const mailService = require('../service/mail-service')
    exports.tasks_add = (req,res,next) => {
        try{
         new Promise((resolve,reject) =>{
                const {id_roles,id_object,id_department,floor,building,room,opisanie} = req.body
                pool.query(
                    `INSERT INTO tasks (id_roles,id_object,id_department,floor,building,room,opisanie) VALUES (?,?,?,?,?,?,?)`, 
                    [id_roles,id_object,id_department,floor,building,room,opisanie],
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        resolve(result.insertId)
                    });
            })
            .then(async(data)=>{
                const {id_roles} = req.body
                const email = await UserServis.email_role(id_roles)
                return [email,data]
            })
            .then((data)=>{
             const {opisanie} = req.body
             console.log(data[0]);
             mailService.sendActivationMail(data[0],
                                            `Заявка №${data[1]}`,
                                            opisanie,
                                            `http://deltaljw.bget.ru/${data[1]}`
                                            )
            })
            .then(async(data)=>{
               const {data_start,data_end} = req.body
               const ddd = await UserServis.tasks_update_1(data_start,data_end)
               res.send(ddd)
                 
            })
           
        }catch(e){
            res.json({error:e});
        }
    }



    exports.tasks_update_z = (req,res,next) => {
        try{
            const {data_start,data_end} = req.body
            var D_start = new Date(data_start);
            D_start.setDate(D_start.getDate() + 1);
                pool.query(
                    `SELECT * FROM tasks WHERE data_statrt BETWEEN  ? AND  ? ORDER BY id desc`,
                    [data_end,D_start],
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
                    });           
        }catch(e){
            res.json({error:`что то не так ${D_start} c ${D_end}`});
        }
    }
    
    exports.tasksStartWork = (req,res,next) => {
        try{
            const {idTasks,idUser,status} = req.body
            let data = new Date()
                new Promise((resolve,reject)=>{
                    pool.query(
                    `UPDATE tasks SET id_users = ? , status = ? , data_v_rabote = ? WHERE id = ?`,
                    [idUser,status,data,idTasks],
                    function (err, result) {
                        if (err) console.log(err);
                        resolve('result')
                    });
                })
                .then((d)=>{
                      let date = new Date()
                      let dataOld = date.setDate(date.getDate() - 15);
                      pool.query(
                        `SELECT * FROM tasks WHERE data_statrt BETWEEN  ? AND  ?  ORDER BY id desc`,
                      [dataOld,date],
                        function (err, result) {
                            if (err) console.log(err);
                            res.send(result)
                        });   
                })
                          
        }catch(e){
            res.json({error:`что то не так ${D_start} c ${D_end}`});
        }
    }

    exports.tasksEndWork = (req,res,next) => {
        try{
            const {idTasks,status} = req.body
            let data = new Date()
                new Promise((resolve,reject)=>{
                    pool.query(
                    `UPDATE tasks SET status = ? , data_end = ? WHERE id = ?`,
                    [status,data,idTasks],
                    function (err, result) {
                        if (err) console.log(err);
                        resolve('result')
                    });
                })
                .then((d)=>{
                      let date = new Date()
                      let dataOld = date.setDate(date.getDate() - 15);
                      pool.query(
                        `SELECT * FROM tasks WHERE data_statrt BETWEEN  ? AND  ?  ORDER BY id desc`,
                      [dataOld,date],
                        function (err, result) {
                            if (err) console.log(err);
                            res.send(result)
                        });   
                })
                          
        }catch(e){
            res.json({error:`что то не так ${D_start} c ${D_end}`});
        }
    }

    exports.tasksNoWork = (req,res,next) => {
        try{
            const {idTasks,text} = req.body
            let data = new Date()
                new Promise((resolve,reject)=>{
                    pool.query(
                    `UPDATE tasks SET prichina = ? , status = ?, data_no = ? WHERE id = ?`,
                    [text,3,data,idTasks],
                    function (err, result) {
                        if (err) console.log(err);
                        resolve('result')
                    });
                })
                .then(async(data)=>{
                    const wwwww = await  UserServis.tasks_mail_big(11)
                    return  wwwww;
                })
                .then((data)=>{
                    const {idTasks,text} = req.body
                    data.map((dd)=>{
                     mailService.sendActivationMail(dd.email,
                                                   `Заявка №${idTasks} не выполнена`,
                                                   text,
                                                   `http://deltaljw.bget.ru/${idTasks}`
                                                   )
                    })

                   })
                .then((d)=>{
                      let date = new Date()
                      let dataOld = date.setDate(date.getDate() - 15);
                      pool.query(
                        `SELECT * FROM tasks WHERE data_statrt BETWEEN  ? AND  ?  ORDER BY id desc`,
                      [dataOld,date],
                        function (err, result) {
                            if (err) console.log(err);
                            res.send(result)
                        });   
                })
                          
        }catch(e){
            res.json({error:`что то не так ${D_start} c ${D_end}`});
        }
    }

    exports.tasksNoWork44 = async(req,res,next) => {

    }