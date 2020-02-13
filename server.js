const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const nodemailer = require("nodemailer");
app.use('/', express.static(path.join(__dirname, 'public')));
app.post("/contact", (request, response) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: 'Gmail',
        secure: true,
        auth: {
            user: "jennieycharles@gmail.com",
            pass: "5463jeny"
        }
    });
    var textBody = `FROM: ${request.body.name}; EMAIL:${request.body.email}; phone:${request.body.phone}; MESSAGE:${request.body.message}`;
    var htmlBody = `<h2>mail to Dacota real estate </h2><p>from:${request.body.name}<br/>${request.body.message}<br/> ${request.body.phone}<br/> <a href='mailto:${request.body.email}'> ${request.body.email}</a></p>`;
    var mail = {
        from: "jennieycharles@gmail.com",
        to: "josphatje@gmail.com",
        subject: "mail form ",
        text: textBody,
        html: htmlBody
    };
    transporter.sendMail(mail, (err) => {
        if (err) {
            console.log(err);
            response.json({ message: "error occured" });

        } else {
           
            return response.redirect('/');
        }
    });
});



app.post("/newletter", (request, response) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        service: 'Gmail',
        secure: true,
        auth: {
            user: "jennieycharles@gmail.com",
            pass: "5463jeny"
        }
    });
    var textBody = ` EMAIL:${request.body.email};}`;
    var htmlBody = ` <br/> <a href='mailto:${request.body.email}'> ${request.body.email}</a></p>`;
    var mail = {
        from: "jennieycharles@gmail.com",
        to: "josphatje@gmail.com",
        subject: "mail form ",
        text: textBody,
        html: htmlBody
    };
    transporter.sendMail(mail, (err) => {
        if (err) {
            console.log(err);
            response.json({ message: "error occured" });

        } else {

            return response.redirect('/');
        }
    });
});
app.listen(3000, () => console.log("running"));






































// const express = require('express');
// const app = express();
// var nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,"travel-website")))
// app.post('/contact',(req,res)=>{
//     const smtpTrans = nodemailer.createTransport({
//         host:"smtp.gmail.com",
//         port:465,

//         secure:true,
//         auth:{
//             user:'josphatje@gmail.com',
//             pass:'5463#jeny'
//         }
//     });
//     //specify what the email will look like
//     const mailOpts ={
//         from: 'josphatje@gmail.com',
//         to:'jennieycharles@gmail.com',
//         subject:"message from the contact form",
//         text:`${req.body.name} (${req.body.email}) says: ${req.body.message}`

//     }
//     smtpTrans.sendMail(mailOpts,(error,response)=>{
//         if (error) {
//             res.render('contact-failure') // Show a page indicating failure
//           }
//           else {
//             res.render('contact-success') // Show a page indicating success
//           }
//     });




// });
// module.exports='server.js';