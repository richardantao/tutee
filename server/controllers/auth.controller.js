const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// import Auth secret
const secret = process.env.AUTH_SECRET

// import model
const User = require("../models/Users.model").Model;

// instantiate model
const controller = [];

controller.signup = (req, res, next) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)

    const user = new User({
        "name.first": req.body.fname,
        "name.last": req.body.lname,
        "email.address": req.body.email,
        "password": hashedPassword
    });

    user.save()
    .then(newUser => {
        const token = jwt.sign({ id: userId }, secret, {
            expiresIn: 86400 // one day
        });

        return res.status(201).json({
            auth: true, 
            token,
            newUser
        });
    })
    .catch(err => {
        return res.status(500).json({
            auth: false,
            message: err.message || "An error occured while processing your request"
        });
    });
}

controller.signin = (req, res, next) => {
    if(!req.header('x-auth-token')) {
        return res.status(400).json({
            message: "There is no token for user authentication"
        });
    } else {
        res.status(201).json({
            message: "Login sucessful"
        });
    }
    next();
}

controller.signout = (req, res, next) => {
    
}

module.exports = controller;