const async = require("async");

// import model
const Users = require("../models/Users.model");

// instantiate controller
const controller = [];

controller.index = (req, res) => {
    async.parallel({

    });
}

controller.edit = (req, res) => {
	
};

// POST request to create user's account
controller.create = (req, res) => {
		
}

// PUT request to update user's account details
controller.update = (req, res) => {
	
}

controller.delete = (req, res) => {
	
}

module.exports = controller;