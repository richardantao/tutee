// import database
const database = require("../config/config");

// instantiate model
const Tasks = [];

/* model queries */
Tasks.findAll = () => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Tasks
		WHERE UserId = ${userId}`
	);
}

Tasks.findAllPast = () => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Tasks
		WHERE UserId = ${userId}`
	);
}

Tasks.findById = () => {
	let userId = req.params.UserId;
	let taskId = req.params.TaskId; 

	return database.query(
		`SELECT * FROM Tasks
		WHERE UserId = ${userId} AND TaskId = ${taskId}`
	);
}

Tasks.create = () => {
	let userId = req.params.UserId;
	let taskId = req.params.TaskId; 
	let created = {
		taskTitle: req.body.taskTitle,
		taskType: req.body.taskType,
		taskDeadline: req.body.taskDeadline,
		taskCompletion: req.body.taskCompletion,
		taskNote: req.body.taskNote 
	}

	return database.query(
		`INSERT INTO Tasks
		(UserId, ModuleId, TaskTitle, TaskType, TaskDeadline, TaskCompletion, TaskNote)
		VALUES (${userId},${taskId},${created.taskTitle},
			${created.taskType}, ${created.taskDeadline},${created.taskCompletion},${created.taskNote})`
	);
}

Tasks.update = () => {
	let userId = req.params.UserId;
	let taskId = req.params.TaskId;
	let updated = {
		taskTitle: req.body.taskTitle,
		taskType: req.body.taskType,
		taskDeadline: req.body.taskDeadline,
		taskCompletion: req.body.taskCompletion,
		taskNote: req.body.taskNote  
	}

	return database.query(
		`UPDATE Tasks
		SET 
			TaskTitle = ${updated.taskTitle},
			TaskType = ${updated.taskType},
			TaskDeadline = ${updated.taskDeadline},
			TaskCompletion = ${updated.taskCompletion},
			TaskNote = ${updated.taskNote}
		WHERE UserId = ${userId} AND TaskId = ${taskId}`
	);
}

Tasks.delete = () => {
	let userId = req.params.UserId;
	let taskId = req.params.TaskId;

	return database.query(
		`DELETE FROM Tasks 
		WHERE UserId = ${userId} AND TaskId = ${taskId}
		`
	);
}

// export model
module.exports = Tasks;