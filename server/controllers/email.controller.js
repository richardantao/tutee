// import model
const Email = require("../models/Email.model");

// instantiate controller
const controller = [];

controller.beta = (req, res) => {
    Email.betaReq()
    .then(email => {    
        return res.redirect(301, "https:localhost:3000/home.html");
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occured while submitting this email"
        });
    });
}

controller.contact = (req, res) => {

}

module.exports = controller;