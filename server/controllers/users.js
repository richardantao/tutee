/* Users Controllers */

// import dependencies
const Users = require("../models/Users");
const { check, validationResult, filter } = require("express-validator");

exports.usersEdit = function(req, res) {
	
	// Sequelize SELECT using Find(), users account by their ID
	
	// return json 
	return res.status(200).json();
};

// POST request to create user's account
exports.usersCreate = [
	
	// validate and sanitize input fields | add whitelists for each parameter
	check("firstName"),
	check("lastName"),
	check("password"),
	check("email"),
	
	function(req, res) {
		
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			// Sequelize INSERT using create(), create a users account
			Users.create({
				id: req.body.id,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				password: req.body.password,
				email: req.body.email,
		  	}).then(function(Users) {
				return res.status(201).json(user);
			});
		}
	}
];

// PUT request to update user's account details
exports.usersUpdate = [
	
	// validate and sanitize values
	check("firstName"),
	check(""),
	check("email").isEmail(),
	check(""),
	
	function(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			
			//
			
			//
			return res.status(204).json();
		}
	}
];

exports.usersDelete = [
	
	function(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			return res.status(204).json();
		}
	}
];