const express = require('express')
var nodemailer = require('nodemailer');

const app = express()

app.get('/', (req, res) => {


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        // secure : true,
        // port:465,
        auth: {
            user: 'dkkr30907@gmail.com',
            pass: 'oepqzhtatabtrsfb'
        }
    });

    var mailOptions = {
        from: 'dkkr30907@gmail.com',
        to: 'deepakkr8498@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error are : ",error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    res.send('hlo users mail sending')
})



const port = 1234

app.listen(port, () => {
    console.log('Server is running on Port :- ', port);
   
})


