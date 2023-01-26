
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

require('dotenv').config();
const PORT =  process.env.PORT || 5000;
const app = express()
app.use(
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    express.json(),
    cookieParser(),
    cors({ 
        credentials: true,
        origin: ['http://localhost:3000','http://192.168.0.104:3001','https://programma-zayavok.ru'], })
)
const routers = require("./routes.js");
const { tasksNoWork44 } = require("./zapros/tasks.js");
routers(app)

tasksNoWork44()
// let now = new Date();
// let now1 = now.setDate(now.getDate()+30);
// let ff = new Date(now1)
// console.log(`${ff.getFullYear()}-${ff.getMonth()+1}-${ff.getDate()}  `);
app.listen(PORT, () => console.log(`server statsrt ${PORT}`))
