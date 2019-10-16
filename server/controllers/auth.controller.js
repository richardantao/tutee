// import dependencies
const express = require("express");
const app = express();

const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const { google } = require("googleapis");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const OAuth2 = google.auth.OAuth2;
const path = require("path");

// import env variables
const authUser = process.env.EMAIL_AUTH_USER;
const authPass = process.env.EMAIL_AUTH_PASSWORD;
const authEmail = process.env.EMAIL_AUTH_EMAIL;
const authClient = process.env.CLIENT_ID;
const authClientSecret = process.env.CLIENT_SECRET;
const authRedirect = process.env.REDIRECT_URL;
const authRefresh = process.env.REFRESH_TOKEN;
const authSecret = process.env.AUTH_SECRET;

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const oauth2Client = new OAuth2(
    authClient, 
    authClientSecret,
    authRedirect
);

oauth2Client.setCredentials({
    refresh_token: authRefresh
});

// const accessToken = oauth2Client.getAccessToken();

// import model
const User = require("../models/Users.model").Model;

// instantiate controller
const controller = [];

controller.application = (req, res, next) => {
//     const transporter = nodemailer.createTransport({
//         host: "Gmail",
//         port: 587,
//         auth: {
//             type: "OAuth2",
//             user: authEmail, 
//             clientId: authClient,
//             clientSecret: authClientSecret,
//             refreshToken: authRefresh//,
//             // accessToken: accessToken
//         }
//     });
            
//     const mailOptions = {
//         from: req.body.fname + " " + req.body.lname + " <" + req.body.email +">",
//         to: authEmail,
//         attachments: [
//             {
//                 path: ABSPATH + ""
//             }
//         ]
//     };
            
//     transporter.sendMail(mailOptions, (err, info) => {
//         if (err) {
//             throw err;
//         } else {
//             console.log("Email sent: " + info.response);
//         }
//     })
//     .then(info => {
//         return res.status(200).json(info);
//     })
//     .catch(err => {
//         return res.status(500).json({
//             message: err.message || "The server experienced an erorr while processing your request"
//         })
//     });
}

controller.contact = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        auth: {
            type: "OAuth2",
            user: authEmail, 
            clientId: authClient,
            clientSecret: authClientSecret,
            refreshToken: authRefresh,
            accessToken: accessToken
        }
    });
            
    const mailOptions = {
        from: "<" + req.body.email + ">",
        to: authEmail,
        subject: req.body.name + " has sent you a message!",
        text: req.body.message
    };
            
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log("Email sent: " + info.response);
        }
        transporter.close();
    })
    .then(info => {
        return res.status(200).json(info);
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "The server experienced an erorr while processing your request"
        })
    });
}

controller.invite = (req, res, next) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        auth: {
            type: "OAuth2",
            user: authEmail, 
            clientId: authClient,
            clientSecret: authClientSecret,
            refreshToken: authRefresh,
            accessToken: accessToken
        }
    });
            
    const mailOptions = {
        from: "<" + req.body.email + ">",
        to: authEmail,
        subject: req.body.fname + " " + req.body.lname + " has requested an invite to Tutee's beta test!",
        text: "Your database should be populated with this user's information." 
    };
            
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log("Email sent: " + info.response);
        }
        transporter.close();
    })
    .then(info => {
        return res.status(200).json(info);
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "The server experienced an erorr while processing your request"
        })
    });
}

controller.register = (req, res, next) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    const user = new User({
        "name.first": req.body.fname,
        "name.last": req.body.lname,
        "email.address": req.body.email,
        "password": hashedPassword
    });

    user.save()
    .then(newUser => {
        const token = jwt.sign({ id: userId }, authSecret, {
            expiresIn: 86400 // one day
        });

        res.status(201).json({
            auth: true, 
            token,
            newUser
        });

        next();
    })
    .catch(err => {
        return res.status(500).json({
            auth: false,
            message: err.message || "An error occured while processing your request"
        });
    });
}

controller.signin = (req, res, next) => {
    // if(!req.header("x-auth-token")) {
    //     return res.status(400).json({
    //         message: "There is no token for user authentication"
    //     });
    // } else {
    //     res.status(201).json({
    //         message: "Login sucessful"
    //     });
    // }
    // next(); BradTraversy

    User.findOne({ "email.address": req.body.email })
    .then(user => {
        if(!user) {
            return res.status(404).json({
                auth: false,
                message: "This user wasn't found"
            })
        } else {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            const token = jwt.sign({ id: user._id }, authSecret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({
                auth: true, 
                token,
                user
            });

            next();
        }
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred while processing your request"
        })
    });
}

controller.signout = (req, res, next) => {
    return res.status(200).json({
        auth: false,
        message: "You have successfully logged out",
        token: null
    });  
}

module.exports = controller;