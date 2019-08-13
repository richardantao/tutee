// import dependencies
const Classes = require("../models/Classes");
const Tasks = require("../models/Tasks");
const Evalus = require("../models/Evaluations");
const { check, validationResult, filter } = require("express-validator");

// GET display class editor for specific class
exports.dashboardClassEdit = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Classes.find({
			where: { id: req.params.classId }
		})
		.then(classes => {
			return res.status(204).json(classes);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};

exports.dashboardClassDelete = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		
	}
}


exports.dashboardTaskEdit = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.taskId}
		})
		.then(term => {
			return res.status(204).json(term);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.taskId}
		})
		.then(retrievedTask => {
			return res.status(200).json(retrievedTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskCreatePost = (req, res) => {
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

exports.dashboardTaskUpdate = (req, res) => {
	errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Tasks.find({
			where: { id: req.params.taskId }
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

exports.dashboardTaskDelete = (req, res) => {
	errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Tasks.destroy({
			where: { id: req.params.taskId }
		})
		.then(deletedTask => {
			return res.status(204).json(deletedTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}


exports.dashboardEvaluEdit = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Evalus.find({
			where: { id: req.params.evaluId }
		})
		.then(retrievedEvalu => {
			return res.status(200).json(retrievedEvalu)
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardEvaluUpdate = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Evalus.find({
			where: { id: req.params.evaluId }
		})
		.then(Evalus => {
			return Evalus.updateAttributes({
				userId: req.params.userId
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

exports.dashboardEvaluDelete = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Evalus.destroy({
			where: { id: req.params.evaluId }
		})
		.then(deletedEvalu => {
			return res.status(204).json(deletedEvalu);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}
