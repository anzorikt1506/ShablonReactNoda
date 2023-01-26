const nodemailer = require('nodemailer')

class mailService {

   constructor(){
    this.transporter = nodemailer.createTransport({
        host:'smtp.mail.ru',
        port:465,
        secure:true,
        auth:{
             user:'zsindika@bk.ru',
             pass:'t22qn4NxX88pZi65yKJq'
        }
    })
   }

  async sendActivationMail(to, tema, opis, link){
          await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: tema,
            text:'',
            html:
                  ` 
                  <div>
                  <h1>${tema}</h1>
                  <a href='${link}'>${opis}</a>
                  </div>
                  `
          })
  }
}
 
module.exports =new mailService()