const Evalus = require("../models/Evaluations")
const { check, validationResult, filter } = require("express-validator");

exports.index = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Evalus.findAll()
		.then(allEvalus => {
			return res.status(200).json(allEvalus);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// filter evalus to get evalus with a past date
exports.evalusPast = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Evalus.find()
		.then(selectedEvalus => {
			return res.status(204).json(selectedEvalus);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
		
	}
}

// GET request when user attempts to retrieve a specific evaluation
exports.evalusEdit = (req, res) => {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json();
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		Evalus.find()
		.then(evalu => {
			return res.status(200).json(evalu).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			res.status(500).json({ errors: errors.array() });
		});
	}
};

exports.evalusCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Evalus.find()
		.then(newEvalu => {
			return res.status(200).json({newEvalu}); // pipe a redirect ??
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		})
	}
}

// POST request after the user SUBMITS the "New Evaluation" form
exports.evalusCreatePost = (req, res) => {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("evalTitle");
	check("evalType");
	check("evalDate");
	check("evalTime");
	check("evalLocation");
	check("evalNote");

	filter("evalTitle").escape();
	filter("evalType").escape();
	filter("evalDate").escape();
	filter("evalTime").escape();
	filter("evalLocation").escape();
	filter("evalNote").escape();

	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new task object
		Evalus.create()
		.then(createdEvalu => {
			return res.status(201).json(createdEvalu).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after the user SAVES the Evaluations editer form
exports.evalusUpdate = (req, res, next) => {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("evalTitle");
	check("evalType");
	check("evalDate");
	check("evalTime");
	check("evalLocation");
	check("evalNote");

	filter("evalTitle").escape();
	filter("evalType").escape();
	filter("evalDate").escape();
	filter("evalTime").escape();
	filter("evalLocation").escape();
	filter("evalNote").escape();
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Evalus.update()
		.then(updatedEvalu => {
    		return res.status(204).json(updatedEvalu).redirect(301, "/"); // verify redirect status code during unit testing;
		 })
		 .catch(() => {
			return res.status(500).json({ errors: errors.array() });
		 });
	}
}	

// DELETE request after the user DELETES the Evaluations editer form
exports.evalusDelete = (req, res) => {
		const errors = validationResult(req);
		
		if(!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		} else {
			Evalus.delete()
			.then(deletedEvalu => {
				return res.status(204).json(deletedEvalu).redirect(301, "/"); // verify redirect status code during unit testing;
			})
			.catch(() => {
				return res.status(500).json({ errors: errors.array() });
			});
		}
	}