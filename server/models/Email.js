// import dependencies
const express = require("express");
const app = express();

// import nodemailer credentials
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// import middelware
const bodyParser = require("body-parser");
const path = require("path");

// import environment variables
const env = {
    authUser: process.env.EMAIL_AUTH_USER,
    authPass: process.env.EMAIL_AUTH_PASSWORD,
    authEmail: process.env.EMAIL_AUTH_EMAIL,
    authClient: process.env.CLIENT_ID, 
    authSecret: process.env.CLIENT_SECRET,
    authRedirect: process.env.REDIRECT_URL,
    authRefresh: process.env.REFRESH_TOKEN
}

const oauth2Client = new OAuth2(
    env.CLIENT_ID, 
    env.CLIENT_SECRET,
    env.REDIRECT_URL
);

oauth2Client.setCredentials({
    refresh_token: env.REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken()

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
            type: "OAuth2",
            user: env.authEmail, 
            clientId: env.authClient,
            clientSecret: env.authSecret,
            refreshToken: env.authRefresh,
            accessToken: accessToken
        },
        rejectUnauthorized: false
    });
            
    const mailOptions = {
        from: "<" + req.body.email + ">",
        to: env.authEmail,
        subject: req.body.firstName + " " + req.body.lastName + " has requested a beta invite!",
        html: ""
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
            type: "OAuth2",
            user: env.authEmail, 
            clientId: env.authClient,
            clientSecret: env.authSecret,
            refreshToken: env.authRefresh,
            accessToken: accessToken
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
            type: "OAuth2",
            user: env.authEmail, 
            clientId: env.authClient,
            clientSecret: env.authSecret,
            refreshToken: env.authRefresh,
            accessToken: accessToken
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