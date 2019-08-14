// import database
const database = require("../config/config");

// instantiate model
const Years = [];

Years.findAll = (req) => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Years
		WHERE UserId = ${userId}`
	);
}

Years.findbyId = (req) => {
	let userId = req.params.UserId;
	let yearId = req.params.YearId;

	return database.query(
		`SELECT * FROM Years
		WHERE UserId = ${userId} AND YearId = ${yearId}`
	);
}

Years.create = (req) => {
	let userId = req.params.UserId;
	let created = {
		yearTitle: req.body.yearTitle,
		yearStart: req.body.yearStart,
		yearEnd: req.body.yearEnd
	}
	
	return database.query(
		`INSERT INTO Years 
		(UserId, YearTitle, YearStart, YearEnd)
		VALUES (${userId}, ${created.yearTitle}, ${created.yearStart}, ${created.yearEnd})`
	);
}

Years.update = (req) => {
	let userId = req.params.UserId;
	let updated = {
		yearTitle: req.body.yearTitle,
		yearStart: req.body.yearStart,
		yearEnd: req.body.yearEnd
	};

	return database.query(
		`UPDATE Years 
		SET
			YearTitle = ${updated.yearTitle},
			YearStart = ${updated.yearStart},
			YearEnd = ${updated.yearEnd}
		WHERE UserId = ${userId}`
	);
}

Years.delete = (req) => {
	let userId = req.params.UserId;
	
	return database.query(
		`DELETE FROM Years
		WHERE ${userId}`
	);
}

// export model
module.exports = Years;