// import dependencies
const express = require("express");
const app = express();

const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

// import environment variables
const env = {
    authUser: process.env.EMAIL_AUTH_USER,
    authPass: process.env.EMAIL_AUTH_PASSWORD,
    authEmail: process.env.EMAIL_AUTH_EMAIL
}

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// instantiate nodemailer model
const Email = [];

// nodemailer credential for the beta invite form
Email.betaReq = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        secure: false,
        auth: {
          user: env.authUser,
          pass: env.authPass
        },
        rejectUnauthorized: false
    });
            
    const mailOptions = {
        from: req.body.firstName + " " + req.body.lastName + " <" + req.body.email +">",
        to: env.authEmail,
        attachments: [
            {
                path: ""
            }
        ]
    };
            
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


// nodemailer credentials for the website's contact form
Email.contactMsg = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        secure: false,
        auth: {
          user: env.authUser,
          pass: env.authPass
        },
        rejectUnauthorized: false
    });
            
    const mailOptions = {
        from: req.body.firstName + " " + req.body.lastName + " <" + req.body.email +">",
        to: env.authEmail,
        attachments: [
            {
                path: ""
            }
        ]
    };
            
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// create nodemailer credentials for all job applications
Email.teamApp = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        secure: false,
        auth: {
          user: env.authUser,
          pass: env.authPass
        },
        rejectUnauthorized: false
    });
            
    const mailOptions = {
        from: req.body.firstName + " " + req.body.lastName + " <" + req.body.email +">",
        to: env.authEmail,
        attachments: [
            {
                path: ""
            }
        ]
    };
            
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

// export model
module.exports = Email;