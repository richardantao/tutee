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
	let newTask = {
		userId: req.params.UserId,
		moduleId: req.params.ModuleId, // confirm moduleId or taskId
		taskTitle: req.body.taskTitle,
		taskType: req.body.taskType,
		taskDeadline: req.body.taskDeadline,
		taskCompletion: req.body.taskCompletion,
		taskNote: req.body.taskNote 
	}

	return database.query(
		`INSERT INTO Tasks
		(UserId, ModuleId, TaskTitle, TaskType, TaskDeadline, TaskCompletion, TaskNote)
		VALUES (${newTask.userId},${newTask.moduleId},${newTask.taskTitle},
			${newTask.taskType}, ${newTask.taskDeadline},${newTask.taskCompletion},${newTask.taskNote})`
	);
}

Tasks.update = () => {
	let userId = req.params.UserId;
	let taskId = req.params.TaskId;

	return database.query(
		`UPDATE Tasks
		SET 
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