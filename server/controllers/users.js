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
exports.usersCreate = function(req, res) {
	const errors = validationResult(req);
	
	// validate and sanitize input fields | add whitelists for each parameter
	check("firstName");
	check("lastName");
	check("password");
	check("email");
		
	filter("firstName").escape();
	filter("lastName").escape();
	filter("password").escape();
	filter("email").escape();

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// Sequelize INSERT using create(), create a users account
		Users.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			password: req.body.password,
			email: req.body.email,
		})
		.then(newUser =>  {
			return res.status(201).json(newUser);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request to update user's account details
exports.usersUpdate = function(req, res) {
	const errors = validationResult(req);

	// validate and sanitize values
	check("firstName");
	check("lastName");
	check("email").isEmail();
	check("country");
	check("region");
	check("institution");

	filter("firstName").escape();
	filter("lastName").escape();
	filter("email").escape();
	filter("country").escape();
	filter("region").escape();
	filter("institution").escape();

		
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Users.find({
			where: { id: req.params.id }
		})
		.then(Users => {
			return Users.updateAttributes({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				country: req.body.country,
				region: req.body.region,
				institution: req.body.institution
			})
		})
		.then(retrievedUser => {
			return res.status(204).json(retrievedUser);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.usersDelete = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Users.destroy({
			where: { id: req.params.id }
		})
		.then(deletedUser => {
			return res.status(204).json(deletedUser);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.arrays() });
		});
	}
}