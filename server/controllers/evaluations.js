const Evals = require("../models/Evaluations")
const { check, validationResult, filter } = require("express-validator");

// GET request on the /Evaluations path
exports.index = function(req, res) {
	
	// Sequelize SELECT using Find(), 
	
	// return selected objects as JSON to the client to render by respective jQuery function
	return res.status(200).json({});
}

// filter evals to get evals with a past date
exports.evalsPast = function(req, res) {

}

// GET request when user attempts to retrieve a specific evaluation
exports.evalsEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(422).json();
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		evals.find({
      		where: { id: req.params.id}
    	}).then(function(evals) {
			return res.status(200).json(evals).redirect(301, "/"); // verify redirect status code during unit testing;	
		});
	}
};

exports.evalsCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		
	}
}

// POST request after the user SUBMITS the "New Evaluation" form
exports.evalsCreatePost = function(req, res) {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("");
	check("");
	check("");
	check("");
	check("");

	filter("").escape();
	filter("").escape();
	filter("").escape();
	filter("").escape();
	filter("").escape();

	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new task object
		evals.create({
			course: req.body.course,
			module: req.body.module,
			title: req.body.title,
			type: req.body.type,
			deadline: req.body.deadline,
			completion: req.body.completion,
			note: req.body.note
		}).then(function(evals) {
			return res.status(201).json(evals).redirect(301, ".."); // verify redirect status code during unit testing;
		});
	}
}

// PUT request after the user SAVES the Evaluations editer form
exports.evalsUpdate = function(req, res, next) {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("title");
	check("course.id");
	check("type");
	check("location");
	check("date");
	check("time");
	check("duration");
	check("weighting");
	check("score");
	
	filter("title").escape();
	filter("course.id").escape();
	filter("type").escape();
	filter("location").escape();
	filter("date").escape();
	filter("time").escape();
	filter("duration").escape();
	filter("weighting").escape();
	filter("score").escape();
		
	if(!errors.isEmpty()) {
		res.status(422).json({ errors: errors.array() });
	} else {
		evals.find({
     		where: { id: req.params.id }
    	}).then(function(evals) {
        	return tasks.updateAttributes({
				course: req.body.course,
				module: req.body.module,
				title: req.body.title,
				type: req.body.type,
				deadline: req.body.deadline,
				completion: req.body.completion,
				note: req.body.note
			})
    	}).then(function(updatedEval) {
    		res.status(204).json(updatedEval).redirect(301, "/"); // verify redirect status code during unit testing;
     	});
	}
}	


// DELETE request after the user DELETES the Evaluations editer form
exports.evalsDelete = function(req, res) {
		const errors = validationResult(req);
		
		if(!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			evals.destroy({
				where: { id: req.params.id }
			}).then(function(deletedEvals) {
				return res.status(204).json(deletedEval).redirect(301, "/"); // verify redirect status code during unit testing;
			});
		}
	}