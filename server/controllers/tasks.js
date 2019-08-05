// import dependencies
const tasks = require("../models/Tasks");
const { check, validationResult, filter } = require("express-validator");

exports.tasksPast = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({errors: errors.array() });
	} else {
		
	}
};

// GET request for the Tasks editer form (single task by its ID)
exports.tasksEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(422).json();
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		tasks.find({
      		where: { id: req.params.id}
    	}).then(function(tasks) {
			return res.status(200).json(tasks).redirect(301, "/"); // verify redirect status code during unit testing;	
		});
	}
};

exports.tasksCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json();
	} else {
		
	}
}

// POST request after the user SUBMITS the "New Term" form
exports.tasksCreatePost = function(req, res) {
		// validate fields
		check("course").isLength({ min:1 }).trim().withMessage("You must choose a course for this task");
		check("module").isLength({ min:1 }).trim().withMessage("You must choose a module");
		check("title").isLength({ min:1 }).trim().withMessage("Title of task must be specified");
		check("type").isLength({ min:1 }).trim().withMessage("Type of task must be specified");
		check("deadline").isLength({ min:1 }).trim().withMessage("Deadline must be specified").toDate();
		check("completion").isNumeric().trim().withMessage("Your input is invalid. Please enter a number between 0 and 100");
		check("note")
	
		// sanitize fields
		filter("course").escape();
		filter("module").escape();
		filter("title").escape();
		filter("type").escape();
		filter("deadline").escape();
		filter("completion").escape();
		filter("note").escape();

		const errors = validationResult(req);
		
		// check for errors and render JSON error if true
		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			// use POST parameters from form inputs to generate a new task object
			tasks.create({
				module: req.body.module,
				title: req.body.title,
				type: req.body.type,
				deadline: req.body.deadline,
				completion: req.body.completion,
				note: req.body.note
			}).then(function(tasks) {
				return res.status(201).json(tasks).redirect(301, ".."); // verify redirect status code during unit testing;
			});
		}
	}

// PUT request after the user SAVES the Tasks editer form 
exports.tasksUpdate = function(req, res, next) {
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

	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		res.status(422).json({ errors: errors.array() });
	} else {
		tasks.find({
     		where: { id: req.params.id }
    	}).then(function(tasks) {
        	return tasks.updateAttributes({
				course: req.body.course,
				module: req.body.module,
				title: req.body.title,
				type: req.body.type,
				deadline: req.body.deadline,
				completion: req.body.completion,
				note: req.body.note
			})
      	}).then(function(updatedTask) {
        	res.status(204).json(updatedTask).redirect(301, "/"); // verify redirect status code during unit testing;
      	});
	}
}	

// DELETE request after the user DELETES the Tasks editer form
exports.tasksDelete = function(req, res) {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		tasks.destroy({
			where: { id: req.params.id }
		}).then(function(deletedTask) {
			return res.status(204).json(deletedTask).redirect(301, "/"); // verify redirect status code during unit testing;
		});
	}
}









