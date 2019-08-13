const config = require("../config/config");
const models = config.models;
const Tasks = require("../models/Tasks");
const { check, validationResult, filter } = require("express-validator");

exports.index = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		findAll({

		})
		.then({

		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.tasksPast = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({errors: errors.array() });
	} else {
		Tasks.findAll({
			where: { }
		})
		.then(pastTasks => {
			return res.status(204).json(pastTasks);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

// GET request for the Tasks editer form (single task by its ID)
exports.tasksEdit = (req, res) => {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json();
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		models.Tasks.find({
      		where: { id: req.params.taskId }
		})
		.then(tasks => {
			return res.status(200).json(tasks);	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

exports.tasksCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.taskId }
		})
		.then(retrievedTask => {
			return res.status(204).json(retrievedTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });	
		});
	}
}

// POST request after the user SUBMITS the "New Term" form
exports.tasksCreatePost = (req, res) => {
	const errors = validationResult(req);
	
	// validate fields
	check("course").isLength({ min:1 }).trim().withMessage("You must choose a course for this task");
	check("module").isLength({ min:1 }).trim().withMessage("You must choose a module");
	check("title").isLength({ min:1 }).trim().withMessage("Title of task must be specified");
	check("type").isLength({ min:1 }).trim().withMessage("Type of task must be specified");
	check("deadline").isLength({ min:1 }).trim().withMessage("Deadline must be specified").toDate();
	check("completion").isNumeric().trim().withMessage("Your input is invalid. Please enter a number between 0 and 100");
	check("note");

	// sanitize fields
	filter("course").escape();
	filter("module").escape();
	filter("title").escape();
	filter("type").escape();
	filter("deadline").escape();
	filter("completion").escape();
	filter("note").escape();
	
	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new task object
		Tasks.create({
			userId: req.params.userId,
			module: req.body.module,
			title: req.body.title,
			type: req.body.type,
			deadline: req.body.deadline,
			completion: req.body.completion,
			note: req.body.note
		})
		.then(createdTask => {
			return res.status(201).json(createdTask).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array});
		});
	}
}

// PUT request after the user SAVES the Tasks editer form 
exports.tasksUpdate = (req, res, next) => {
	const errors = validationResult(req);

	// validate fields
	check("course").isLength({ min:1 }).trim().withMessage("You must choose a course for this task");
	check("module").isLength({ min:1 }).trim().withMessage("You must choose a module");
	check("title").isLength({ min:1 }).trim().withMessage("Title of task must be specified");
	check("type").isLength({ min:1 }).trim().withMessage("Type of task must be specified");
	check("deadline").isLength({ min:1 }).trim().withMessage("Deadline must be specified").toDate();
	check("completion").isNumeric().trim().withMessage("Your input is invalid. Please enter a number between 0 and 100");
	check("note");

	// sanitize fields
	filter("course").escape();
	filter("module").escape();
	filter("title").escape();
	filter("type").escape();
	filter("deadline").escape();
	filter("completion").escape();
	filter("note").escape();
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Tasks.find({
     		where: { id: req.params.taskId }
		})
		.then(Tasks => {
        	return Tasks.updateAttributes({
				userId: req.params.userId,
				course: req.body.course,
				module: req.body.module,
				title: req.body.title,
				type: req.body.type,
				deadline: req.body.deadline,
				completion: req.body.completion,
				note: req.body.note
			})
		})
		.then(updatedTask => {
        	return res.status(204).json(updatedTask).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}	

// DELETE request after the user DELETES the Tasks editer form
exports.tasksDelete = (req, res) => {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		tasks.destroy({
			where: { id: req.params.taskId }
		})
		.then(deletedTask => {
			return res.status(204).json(deletedTask).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}









