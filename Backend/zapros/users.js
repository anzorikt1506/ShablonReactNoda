 const pool = require("../db.js")


 exports.usersSpis =((req, res)=>{
    pool.query(
        `SELECT * FROM users ORDER BY id desc`,
        function (err, result) {
            if (err) console.log(err);
            res.send(result)
        });
           
})




exports.addusers = ((req, res) => {
   
    const name = req.body.name
    const id_object = req.body.id_object
    const id_department = req.body.id_department
    const id_roli = req.body.id_roli
    const p = new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM users WHERE fio=? and id_object=? and id_departament=? and id_roles=?`, 
        [name,id_object,id_department,id_roli],
            (err, result) => {
                if (err) console.log(err);
                resolve(result)
            });
    })
    p.then((result) => {
        if (Object.keys(result).length == 0) {
            return new Promise((resolve, reject) => {
                pool.query(
                    `INSERT INTO users (fio,id_object,id_departament,id_roles) VALUES (?,?,?,?)`, [name,id_object,id_department,id_roli],
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        resolve(true)
                    });
            })
        } else {
            const tt = [{ id: 5000000000000000000, name: `Есть совпадения ${name}`, bool: true }]
            res.send(tt)
        }
    })
    .then(data => {
            if (data === true) {
                pool.query(
                    `SELECT * FROM users  ORDER BY id desc`,
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
            
                    });
            }
           
    })
        
        
})



exports.redusers = ((req, res)=>{
    const name = req.body.name
    const id = req.body.id
        pool.query(
        `UPDATE users SET fio = ? WHERE id = ?`,[name,id],
        function (err, result) {
            if (err) console.log(err);   
            
        });           
})


exports.reduserspassword = ((req, res)=>{
    new Promise((resolve,reject)=>{
    const password = req.body.password
    const id = req.body.id_users
        pool.query(
        `UPDATE users SET password = ? WHERE id = ?`,[password,id],
        function (err, result) {
            if (err) console.log(err);   
            resolve('result')
        });  
    })
    .then((data)=>{
        pool.query(
            `SELECT * FROM users  ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
    
            });
    })
         
})



exports.usersdel = ((req, res)=>{
    const id = req.body.id
    const p = new Promise((resolve, reject) => {
        
        pool.query(
            `DELETE from users WHERE id = ?`,id,
            function (err, result) {
                if (err) console.log(err);   
                resolve(result)
            });

    })
    p.then((data)=>{
         pool.query(
            `SELECT * FROM users ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
            });  
    })
     
 
           
})

exports.rolesoption = ((req, res)=>{
    const id_roles = req.body.id_roles
    const option = req.body.option
    const p = new Promise((resolve, reject) => {
        
        pool.query(
            `UPDATE roles SET status = ? WHERE id = ?`,[option,id_roles],
            function (err, result) {
                if (err) console.log(err);   
                resolve(result)
            }); 

    })
    p.then((data)=>{
         pool.query(
            `SELECT * FROM roles ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
            });  
    })
     
 
           
})