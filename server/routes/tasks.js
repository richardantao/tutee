const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks");

// GET request for Tasks page
router.get("/", controller.index);

router.get("/past", controller.tasksPast); // handle logic on frontend?

// GET request for Tasks editer form
router.get("/:taskId/edit", controller.tasksEdit);

// GET request to load form options 
router.get("/create", controller.tasksCreateGet); 

// POST request for creating a new task
router.post("/create", controller.tasksCreatePost);

// PUT user's update to database
router.put("/:taskId/update", controller.tasksUpdatePut);

// POST request for deleting an existent task
router.delete("/:taskId/delete", controller.tasksDelete);







// old code; before deleting check if code blocks can be used in a controllers
	// task routes
router.get("/", function(req, res) {
//	const = ; 
	let select = "SELECT * FROM Tasks WHERE";
	
	connection.query(select, function(err, rows, fields) {
		if (err) {
			console.log("The query for tasks items failed");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("The query for task items was successful");
			res.sendStatus(200);
			res.json(rows);
		}
		connection.end();
	});
});

router.post("/newTask", function(req, res) {
	let insert = "INSERT INTO Tasks(Module_ID, Task_Title, Task_Type, Task_Deadline, Task_Note) VALUES ('" + req.body.moduleID + "', '"+ req.body.taskTitle + "', '" + req.body.taskType + "', '" + req.body.taskDeadline + "', '" + req.body.taskNote + "')";
	
	connection.query(insert, function(err, result, fields) {
		if(err) {
			console.log("New task failed to insert into the database");
			res.sendStatus(500);
			throw err;
		} else {
			console.log(result);
			res.sendStatus(200);		
		}
		connection.end();
	});
});

router.post("/deleteTask/:Task_ID", function(req, res) {
	const taskID = req.params.Task_ID;
	let remove = "DELETE FROM Tasks WHERE Task_ID = " + taskID;
	
	connection.query(remove, function(err, result) {
		if (err) {
			console.log("The delete query failed");
			res.sendStatus(500);
			throw err;
		} else {
			res.sendStatus(200);
			console.log(result);
		}
		connection.end();
	});
});

module.exports = router;