 const pool = require("../db.js")

exports.object = ((req, res) => {
   
    let nameObject = req.body.nameObject
    const p = new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM object WHERE name=?`, nameObject,
            (err, result) => {
                if (err) console.log(err);
                resolve(result)
            });
    })
    p.then((result) => {
        if (Object.keys(result).length == 0) {
            return new Promise((resolve, reject) => {
                pool.query(
                    `INSERT INTO object (name) VALUES (?)`, nameObject,
                    function (err, result) {
                        if (err) console.log(err);
                        else console.log(result);
                        resolve(true)
                    });
            })
        } else {
            const tt = [{ id: 500, name: `Есть совпадения ${nameObject}`, bool: true }]
            res.send(tt)
        }
    })
    .then(data => {
            if (data === true) {
                pool.query(
                    `SELECT * FROM object ORDER BY id desc`,
                    function (err, result) {
                        if (err) console.log(err);
                        res.send(result)
            
                    });
            }
           
    })
        
        
})

exports.nachObject =((req, res)=>{
    pool.query(
        `SELECT * FROM object ORDER BY id desc`,
        function (err, result) {
            if (err) console.log(err);
            res.send(result)
        });
           
})


exports.updateObject = ((req, res)=>{
    const name = req.body.name
    const id = req.body.id
    const p = new Promise((resolve, reject) => {
        pool.query(
        `UPDATE object SET name = ? WHERE id = ?`,[name,id],
        function (err, result) {
            if (err) console.log(err);   
            resolve(result)
        });
    })
    p.then((data)=>{
         pool.query(
            `SELECT * FROM object ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
            });  
    })
     
 
           
})

exports.delObject = ((req, res)=>{
    const id = req.body.id
    const p = new Promise((resolve, reject) => {
        
        pool.query(
            `DELETE from department WHERE id_object = ?`,id,
            function (err, result) {
                if (err) console.log(err);   
                resolve(result)
            });

        pool.query(
        `DELETE from object WHERE id = ?`,id,
        function (err, result) {
            if (err) console.log(err);   
            resolve(result)
        });
        pool.query(
            `DELETE from roles WHERE id_object = ?`,id,
            function (err, result) {
                if (err) console.log(err);   
                resolve(result)
            }); 
    })
    p.then((data)=>{
         pool.query(
            `SELECT * FROM object ORDER BY id desc`,
            function (err, result) {
                if (err) console.log(err);
                res.send(result)
            });  
    })
     
 
           
})


exports.updateObjectTabel = ((req, res)=>{
    const id_object = req.body.id_object
    const id = req.body.id
    const table = req.body.table

    switch(true){
        case(table == 2):
           const p = new Promise((resolve, reject) => {
              pool.query(
                `UPDATE department SET id_object = ? WHERE id = ?`,[id_object,id],
                function (err, result) {
                    if (err) console.log(err);   
                    resolve(result)
                });
            })
    break;
}
           
})
