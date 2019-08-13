// import database
const database = require("../config/config");

// instantiate model
const Years = [];

Years.findAll = () => {
	return database.query(
		``
	);
}

Years.findbyId = (req) => {
	let userId = req.params.UserId;

	return database.query(
		` SELECT * FROM Years
		WHERE UserId = ${userId}`
	);
}

Years.create = (req, res) => {
	
	return database.query(
		`INSERT INTO Years 
		(UserFirstName, UserLastName, UserEmail, UserPassword, UserCountry, UserRegion, UserInstitution) 
		VALUES ()`
	);
}

Years.update = () => {
	let userId = req.params.UserId;
	
	let update = ``;

	return database.query(
		`UPDATE Years SET 
		WHERE UserId = ${userId}`
	);
}

Years.delete = () => {
	let userId = req.params.UserId;
	
	return database.query(
		`DELETE FROM Years
		WHERE ${userId}`
	);
}

// export model
module.exports = Years;