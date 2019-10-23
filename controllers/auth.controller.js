// import dependencies
const express = require("express");
const app = express();

const bcrypt = require("bcryptjs");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const { google } = require("googleapis");
const nodemailer = require("nodemailer");
const OAuth2 = google.auth.OAuth2;
const path = require("path");

// import env variables
const user = process.env.EMAIL_AUTH_EMAIL;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectToken = process.env.REDIRECT_URL;
const refreshToken = process.env.REFRESH_TOKEN;
const secret = process.env.AUTH_SECRET;

// middleware
const auth = require("../middleware/auth.middleware");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const oauth2Client = new OAuth2(
    clientId, 
    clientSecret,
    redirectToken
);

oauth2Client.setCredentials({
    refresh_token: refreshToken
});

// const accessToken = oauth2Client.getAccessToken();

// import model
const User = require("../models/Users.model").Model;

// instantiate controller
const controller = [];

controller.user = (req, res) => {
    User.findById(req.user.id)
    .select("-password")
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occured on the server while processing your request"
        });
    });
}

controller.application = (req, res) => {
     const transporter = nodemailer.createTransport({
         host: "Gmail",
         port: 587,
         auth: {
             type: "OAuth2",
             user, 
             clientId,
             clientSecret,
             refreshToken//,
             // accessToken: accessToken
         }
     });
            
    const mailOptions = {
        from: req.body.fname + " " + req.body.lname + " <" + req.body.email +">",
        to: authEmail,
        attachments: [
            {
                path: ABSPATH + ""
            }
        ]
    };
            
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            throw err;
        } else {
            console.log("Email sent: " + info.response);
        }
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

controller.contact = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        auth: {
            type: "OAuth2",
            user, 
            clientId,
            clientSecret,
            refreshToken,
            accessToken
        }
    });
            
    const mailOptions = {
        from: "<" + req.body.email + ">",
        to: user,
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

controller.invite = (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "Gmail",
        port: 587,
        auth: {
            type: "OAuth2",
            user, 
            clientId,
            clientSecret,
            refreshToken,
            accessToken
        }
    });
            
    const mailOptions = {
        from: "<" + req.body.email + ">",
        to: user,
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

// validate user input
// error handle if necessary
// check database for existing account
// hash password
// save user to database
// send email verification through nodemailer
// 
// generate a token

controller.register = (req, res) => {
    const { fname, lname, email, password } = req.body;
    
    const newUser = new User({
        "name.first": fname,
        "name.last": lname,
        "email.address": email,
        password: password
    });
  
    User.findOne({ "email.address": email })
    .then(user => {
        if(user) { // if email is already registered
            return res.status(400).json({
                success: false,
                message: "This email is already registered with a current user"
            });
        } else {
            bcrypt.genSalt(10, salt => {
                bcrypt.hash(password, salt, (err, hash) =>{
                    if(err) {
                        return res.status(500).json({
                            message: "The server was unable to hash your password",
                            errors: err
                        });
                    } else {
                        password = hash;

                        newUser.save()
                        .then(user => {
                            const token = jwt.sign(
                                { id: user.id }, 
                                secret, 
                                { expiresIn: 259200 } // three days
                           );
                
                            return res.status(201).json({
                                auth: true, 
                                token,
                                newUser
                            });
                        })
                        .catch(err => {
                            return res.status(500).json({
                                success: false,
                                message: err.messsage || "An error occured while processing your request"
                            });
                        });
                    };
                });
            });
        };
    })
    .catch(err => {
        return res.status(500).json({
            auth: false,
            message: err.message || "An error occured while processing your request"
        });
    });
}

controller.signin = (req, res) => {
    User.findOne({ "email.address": req.body.email })
    .then(user => {
        if(!user) {
            return res.status(404).json({
                auth: false,
                message: "This email is not associated with a registered account"
            })
        } else {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

            const token = jwt.sign({ id: user._id }, secret, {
                expiresIn: 86400 // expires in 24 hours
            });

            res.status(200).json({
                auth: true, 
                token,
                user
            });

            res.redirect("301", "/dashboard");
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