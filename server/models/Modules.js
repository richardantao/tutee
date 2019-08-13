// import database
const database = require("../config/config");

// instantiate model
const Modules = [];

Modules.findAll = (req) => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Modules
		WHERE UserId = ${userId}`
	);
}

Modules.findById = (req) => {
	let userId = req.params.UserId;
	let moduleId = req.params.ModuleId;

	return database.query(
		`SELECT * FROM Modules
		WHERE UserId = ${userId} AND ModuleId = ${moduleId}`
	);
}

Modules.create = (req) => {
	let userId = req.params.UserId;

	let courseId = req.params.CourseId;
	
	let created = {
		moduleType: req.body.moduleType,
		moduleStart: req.body.moduleStart,
		moduleEnd: req.body.moduleEnd,
		moduleInstructor: req.body.moduleInstructor
	}

	return database.query(
		`INSERT INTO Modules
		(UserId, CourseId, ModuleType, ModuleStart, ModuleEnd, ModuleInstructor)
		VALUES (${userId}, ${courseId}, ${created.moduleType},
			 ${created.moduleStart}, ${created.moduleEnd}, ${created.moduleInstructor})`
	);
}

Modules.update = (req) => {
	let userId = req.params.UserId;
	let moduleId = req.params.ModuleId;
	let updated = {
		moduleType: req.body.moduleType,
		moduleStart: req.body.moduleStart,
		moduleEnd: req.body.moduleEnd,
		moduleInstructor: req.body.moduleInstructor
	}

	return database.query(
		`UPDATE Modules
		SET 
			moduleType = ${updated.moduleType},
			moduleStart = ${updated.moduleStart},
			moduleEnd = ${updated.moduleEnd},
			moduleInstructor = ${updated.moduleInstructor}
		WHERE UserId = ${userId} AND ModuleId = ${moduleId}`
	);
}

Modules.delete = () => {
	return database.query(
		``
	);
}

// export model
module.exports = Modules;