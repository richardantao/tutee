const async = require("async");
const moment = require("moment");

// import model
const Users = require("../models/Users.model").Model;

// instantiate model
const controller = [];

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