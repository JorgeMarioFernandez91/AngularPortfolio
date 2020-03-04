// import modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// create a new express instance
const app = express();

// config Express to accespt CORS requests and parse request body into json
app.use(cors({
    origin: "*" //may or may not work!
  }));  
app.use(bodyParser.json());

// start app server on port 3000
app.listen(3000, () => {
    console.log("The server started on port 3000");
});


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
    console.log("success");
  })


// define sendmail endpoint, which will send emails and respond with the corresponding status
app.get("/sendmail", (req, res) => {
    console.log("GET request came");
    let user = req.body;
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            print("error");
            res.status(400);
            res.send({error: "Failed to send email"});
        } else {
            console.log("Email has been sent");
            res.send(info);
            print("sent");
        }
    });
})

app.post("/sendmail", (req, res) => {
    console.log("POST request came");
    let user = req.body;
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            print("error");
            res.status(400);
            res.send({error: "Failed to send email"});
        } else {
            console.log("Email has been sent");
            res.send(info);
            print("sent");
        }
    });
})


const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        secure: false,
        auth: {
            user: "61fe174d2fb76f",
            pass: "4f2be70daa7872"
        }
    });
    const mailOptions = {
        from: `"Someone", "from@someone.com"`,
        to: `jmferna91@gmail.com`,
        subject: "Hi",
        html: "<h1>And here is the place for HTML</h1>"
      };
      
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("error!!");
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}


function test(){
    
    console.log("test worked");
}

// "use strict";
// const nodemailer = require("nodemailer");


// // async..await is not allowed in global scope, must use a wrapper
// async function main() {

//     console.log("in main!");
    
//     // Generate test SMTP service account from ethereal.email
//     // Only needed if you don't have a real mail account for testing
//     let testAccount = await nodemailer.createTestAccount();

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     secure: false,
//     auth: {
//         user: "61fe174d2fb76f",
//         pass: "4f2be70daa7872"
//     }
//     });

//     // change this to accept input from contact form

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "jmferna91@gmail.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>" // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);




