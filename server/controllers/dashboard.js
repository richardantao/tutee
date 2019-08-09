// import dependencies
const Sessions = require("../models/Sessions");
const Tasks = require("../models/Tasks");
const Evalus = require("../models/Evaluations");
const { check, validationResult, filter } = require("express-validator");

// GET display class editor for specific class
exports.dashboardSessionEdit = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Sessions.find({
			where: { id: req.params.id }
		})
		.then(session => {
			return res.status(204).json(session);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

exports.dashboardSessionDelete = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		
	}
}


exports.dashboardTaskEdit = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.id}
		})
		.then(term => {
			return res.status(204).json(term);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.id}
		})
		.then(retrievedTask => {
			return res.status(200).json(retrievedTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskCreatePost = function(req, res) {
	errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.create({
			
		})
		.then(createdTask => {
			return res.status(204).json(createdTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskUpdate = function(req, res) {
	errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.id }
		})
		.then(Tasks => {
			return Tasks.updateAttributes({
				
			})
		})
		.then(updatedTask => {
			return res.status(204).json(updatedTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskDelete = function(req, res) {
	errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Tasks.destroy({
			where: { id: req.params.id }
		})
		.then(deletedTask => {
			return res.status(204).json(deletedTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}


exports.dashboardEvaluEdit = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Evalus.find({
			where: { id: req.params.id }
		})
		.then(retrievedEvalu => {
			return res.status(200).json(retrievedEvalu)
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardEvaluUpdate = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Evalus.find({
			where: { id: req.params.id }
		})
		.then(Evalus => {
			return Evalus.updateAttributes({
				
			})
		})
		.then(updatedEvalu => {
			return res.status(204).json(updatedEvalu);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
	}

exports.dashboardEvaluDelete = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Evalus.destroy({
			where: { id: req.params.id }
		})
		.then(deletedEvalu => {
			return res.status(204).json(deletedEvalu);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}
