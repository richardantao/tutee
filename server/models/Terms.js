// import database
const database = require("../config/config");

// instantiate model
const Terms = [];

Terms.findAll = () => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Terms
		WHERE UserId = ${userId}`
	);
}

Terms.findById = () => {
	let userId = req.params.UserId;
	let termId = req.params.TermId;

	return database.query(
		`SELECT * FROM Terms
		WHERE UserId = ${userId} AND TermId = ${termId}`
	);
}

Terms.create = () => {
	let created = {
		userId: req.params.UserId,
		yearId: req.params.YearId,
		termTitle: req.body.termTitle,
		termStart: req.body.termStart,
		termEnd: req.body.termEnd,
		termRotation: req.body.termRotation
	}

	return database.query(
		`INSERT INTO Terms
		(UserId, YearId, TermTitle, TermStart, TermEnd, TermRotation)
		VALUES (${created.userId}, ${created.yearId}, ${created.termTitle},
			 ${created.termStart}, ${created.termEnd}, ${created.termRotation})`
	);
}

Terms.update = () => {
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

Terms.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Terms;