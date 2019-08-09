const Evalus = require("../models/Evaluations")
const { check, validationResult, filter } = require("express-validator");

// filter evalus to get evalus with a past date
exports.evalusPast = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Evalus.find({
			where: { id: req.params.id }
		})
		.then(evalus => {
			return res.status(204).json(evalus);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
		
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
		Evalus.find({
      		where: { id: req.params.id}
		})
		.then(evalu => {
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
		Evalus.find({
			where: {id: req.params.id}
		})
		.then(task => {
			return res.status(200).json({task}); // pipe a redirect ??
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		})
	}
}

// POST request after the user SUBMITS the "New Evaluation" form
exports.evalusCreatePost = function(req, res) {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("course");
	check("user");
	check("title");
	check("type");
	check("date");
	check("time");
	check("location");
	check("note");

	filter("course").escape();
	filter("user").escape();
	filter("title").escape();
	filter("type").escape();
	filter("date").escape();
	filter("time").escape();
	filter("location").escape();
	filter("note").escape();

	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new task object
		Evalus.create({
			course: req.body.course,
			user: req.params.userId,
			title: req.body.title,
			type: req.body.type,
			date: req.body.date,
			time: req.body.time,
			location: req.body.location,
			note: req.body.note
		}).then(evalus => {
			return res.status(201).json(evalus).redirect(301, ".."); // verify redirect status code during unit testing;
		}).catch(() => {
			return res.status(500).json({ errors: errors.array() });
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
		return res.status(400).json({ errors: errors.array() });
	} else {
		Evalus.find({
     		where: { id: req.params.id }
		})
		.then(Evalus => {
        	return Evalus.updateAttributes({
				course: req.body.course,
				user: req.body.userId,
				title: req.body.title,
				type: req.body.type,
				deadline: req.body.deadline,
				completion: req.body.completion,
				note: req.body.note
			})
		})
		.then(updatedEvalu => {
    		return res.status(204).json(updatedEvalu).redirect(301, "/"); // verify redirect status code during unit testing;
		 })
		 .catch(() => {
			return res.status(500).json({ errors: errors.array() });
		 });
	}
}	

// DELETE request after the user DELETES the Evaluations editer form
exports.evalusDelete = function(req, res) {
		const errors = validationResult(req);
		
		if(!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} else {
			Evalus.destroy({
				where: { id: req.params.id }
			})
			.then(deletedEvalus => {
				return res.status(204).json(deletedEvalus).redirect(301, "/"); // verify redirect status code during unit testing;
			})
			.catch(() => {
				return res.status(500).json({ errors: errors.array() });
			});
		}
	}