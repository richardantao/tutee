// import database
const database = require("../config/config");

// instantiate model
const Classes = [];

Classes.findAll = req => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Classes
		WHERE UserId = ${userId}`
	);
}

Classes.findById = req => {
	let userId = req.params.UserId;
	let classId = req.params.ClassId;

	return database.query(
		`SELECT * FROM Classes
		WHERE UserId = ${userId} AND ClassId = ${classId}`
	);
}

Classes.create = req => {
	let userId = req.params.UserId;
	let moduleId = req.params.ModuleId;
	let created = {

	}

	return database.query(
		`INSERT INTO Classes
		(UserId, ModuleId)
		VALUES (${userId}, ${moduleId})`
	);
}

Classes.update = () => {
	let userId = req.params.UserId
	let classId = req.params.ClassId
	let updated = {

	}

	return database.query(
		`UPDATE Classes
		SET
		
		WHERE UserId = ${userId} AND ClassId = ${classId}`
	);
}

Classes.delete = () => {
	let userId = req.params.UserId;
	let classId = req.params.ClassId

	return database.query(
		`DELETE FROM Classes
		WHERE UserId = ${userId} AND ClassId = ${classId}`
	);
}

// export model
module.exports = Classes;
