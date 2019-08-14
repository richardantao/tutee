// import database 
const database = require("../config/config");

// instantiate model
const Evals = [];

Evals.findAll = req => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Evals
		WHERE UserId = ${userId}`
	);
}

Evals.findAllPast = req => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Evals
		WHERE UserId = ${userId}`
	);
}

Evals.findById = req => {
	let userId = req.params.UserId;
	let evalId = req.params.EvalId;

	return database.query(
		`SELECT * FROM Evals
		WHERE UserId = ${userId} AND EvalId = ${evalId}`
	);
}

Evals.create = req => {
	let userId = req.params.UserId;
	let courseId = req.params.CourseId;
	let created = {
		evalTitle: req.body.evalTitle,
		evalType: req.body.evalType,
		evalLocation: req.body.evalLocation,
		evalDate: req.body.evalDate,
		evalTime: req.body.evalTime,
		evalDuration: req.body.evalDuration,
		evalWeighting: req.body.evalWeighting,
		evalScore: req.body.Score
	}

	return database.query(
		`INSERT INTO Evals
		(UserId, CourseId, EvalTitle, EvalType, EvalLocation, EvalDate, EvalTime, EvalDuration, EvalWeighting, EvalScore)
		VALUES (${userId}, ${courseId}, ${created.evalTitle}, 
			${created.evalType}, ${created.evalLocation}, ${created.evalDate}, 
			${created.evalTime}, ${created.evalDuration}, ${created.evalWeighting}, 
			${created.evalScore})`
	);
}

Evals.update = req => {
	let userId = req.params.UserId;
	let evalId = req.params.EvalId;
	let updated = {
		evalTitle: req.body.evalTitle,
		evalType: req.body.evalType,
		evalLocation: req.body.evalLocation,
		evalDate: req.body.evalDate,
		evalTime: req.body.evalTime,
		evalDuration: req.body.evalDuration,
		evalWeighting: req.body.evalWeighting,
		evalScore: req.body.Score
	}

	return database.query(
		`UPDATE Evals
		SET
			EvalTitle = ${updated.evalTitle},
			EvalType = ${updated.evalType},
			EvalLocation = ${updated.evalLocation},
			EvalDate = ${updated.evalDate},
			EvalTime = ${updated.evalTime},
			EvalDuration = ${updated.evalDuration},
			EvalWeighting = ${updated.evalWeighting},
			EvalSCore = ${updated.evalScore}
		WHERE UserId = ${userId} AND EvalId = ${evalId}`
	);
}

Evals.delete = (req) => {
	let userId = req.params.UserId;
	let evalId = req.params.EvalId;

	return database.query(
		`DELETE FROM Evals
		WHERE UserId = ${userId} AND EvalId = ${evalId}`
	);
}

// export model
module.exports = Evals;