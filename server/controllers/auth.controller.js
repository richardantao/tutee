const async = require("async");
const moment = require("moment");

// import model
const User = require("../models/Users.model").Model;

// instantiate model
const controller = [];

controller.signup = (req, res, next) => {
    const user = new User({
        "name.first": req.body.fname,
        "name.last": req.body.lname,
        "email.address": req.body.email,
        "password": req.body.password
    });

    user.save()
    .then(newUser => {
        return res.status(201).json({
            message: "Your profile was successfully created"
        });
    })
    .catch();
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