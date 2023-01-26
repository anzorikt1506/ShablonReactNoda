const mysql = require("mysql")
const pool = mysql.createPool({
    connectionLimit : 10,
    host: "deltaljw.beget.tech",
    user: "deltaljw_zayvka",
    database: "deltaljw_zayvka",
    password: "BK&m0EVn"
});
// pool.connect(function (err) {
//     if (err) {
//         return console.error("Ошибка: " + err);   
//     }
//     else {
//         console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });
module.exports = pool