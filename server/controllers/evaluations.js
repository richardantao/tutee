const Evalus = require("../models/Evaluations")
const { check, validationResult, filter } = require("express-validator");

// filter evalus to get evalus with a past date
exports.evalusPast = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		return res.status(200).send("so is this one");
	}
}

// GET request when user attempts to retrieve a specific evaluation
exports.evalusEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json();
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		evalus.find({
      		where: { id: req.params.id}
		})
		.then(function(evalu) {
			return res.status(200).json(evalu).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			res.status(500).json({ errors: errors.array() });
		});
	}
};

exports.evalusCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		tasks.find({
			where: {id: req.params.id}
		})
		.then(task => {
			res.status(200).json({task}); // pipe a redirect ??
		})
		.catch(() => {
			res.status(500).json({ errors: errors.array() });
		})
	}
}

// POST request after the user SUBMITS the "New Evaluation" form
exports.evalusCreatePost = function(req, res) {
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
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new task object
		evalus.create({
			course: req.body.course,
			user: req.params.userId,
			module: req.body.module,
			title: req.body.title,
			type: req.body.type,
			deadline: req.body.deadline,
			completion: req.body.completion,
			note: req.body.note
		}).then(evalus => {
			return res.status(201).json(evalus).redirect(301, ".."); // verify redirect status code during unit testing;
		}).catch(err => {
			res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after the user SAVES the Evaluations editer form
exports.evalusUpdate = function(req, res, next) {
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
		res.status(400).json({ errors: errors.array() });
	} else {
		evalus.find({
     		where: { id: req.params.id }
		})
		.then(function(evalus) {
        	return evalus.updateAttributes({
				course: req.body.course,
				module: req.body.module,
				title: req.body.title,
				type: req.body.type,
				deadline: req.body.deadline,
				completion: req.body.completion,
				note: req.body.note
			})
		})
		.then(updatedEvalu => {
    		res.status(204).json(updatedEvalu).redirect(301, "/"); // verify redirect status code during unit testing;
		 })
		 .catch(() =>{
			res.status(500).json({ errors: errors.array() });
		 });
	}
}	


// DELETE request after the user DELETES the Evaluations editer form
exports.evalusDelete = function(req, res) {
		const errors = validationResult(req);
		
		if(!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			evalus.destroy({
				where: { id: req.params.id }
			})
			.then(deletedEvalus => {
				return res.status(204).json(deletedEvalus).redirect(301, "/"); // verify redirect status code during unit testing;
			})
			.catch(() => {
				res.status(500).json({ errors: errors.array() });
			});
		}
	}