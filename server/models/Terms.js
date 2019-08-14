// import database
const database = require("../config/config");

// instantiate model
const Terms = [];

Terms.findAll = (req) => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Terms
		WHERE UserId = ${userId}`
	);
}

Terms.findById = (req) => {
	let userId = req.params.UserId;
	let termId = req.params.TermId;

	return database.query(
		`SELECT * FROM Terms
		WHERE UserId = ${userId} AND TermId = ${termId}`
	);
}

Terms.create = (req) => {
	let userId = req.params.UserId;
	let yearId = req.params.YearId;
	let created = {
		termTitle: req.body.termTitle,
		termStart: req.body.termStart,
		termEnd: req.body.termEnd,
		termRotation: req.body.termRotation
	}

	return database.query(
		`INSERT INTO Terms
		(UserId, YearId, TermTitle, TermStart, TermEnd, TermRotation)
		VALUES (${userId}, ${yearId}, ${created.termTitle},
			 ${created.termStart}, ${created.termEnd}, ${created.termRotation})`
	);
}

Terms.update = (req) => {
	let userId = req.params.UserId;
	let termId = req.params.TermId;
	let updated = {
		termTitle: req.body.termTitle,
		termStart: req.body.termStart,
		termEnd: req.body.termEnd,
		termRotation: req.body.taskRotation,
	}

	return database.query(
		`UPDATE Terms
		SET
			TermTitle = ${updated.termTitle},
			TermStart = ${updated.termStart},
			TermEnd = ${updated.termEnd},
			TermRotation = ${updated.termRotation}
		WHERE UserId = ${userId} AND TermId = ${termId}`
	);
}

Terms.delete = (req) => {
	let userId = req.params.UserId;
	let termId = req.params.TermId;

	return database.query(
		`DELETE FROM Terms
		WHERE UserId = ${userId} AND TermId = ${termId}`
	);
}

// export model
module.exports = Terms;