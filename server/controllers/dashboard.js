// import models
const Classes = require("../models/Classes");
const Tasks = require("../models/Tasks");
const Evalus = require("../models/Evaluations");

// import validation functions
const { check, validationResult, filter } = require("express-validator");

// GET display class editor for specific class
exports.dashboardClassEdit = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Classes.find()
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
		Classes.delete()
		.then(() => {
			return res.redirect(301, "/");
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}


exports.dashboardTaskEdit = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.find()
		.then(term => {
			return res.status(200).json(term);
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
		Tasks.find()
		.then(newTask => {
			return res.status(200).json(newTask);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.dashboardTaskCreatePost = (req, res) => {
	errors = validationResult(req);

	check("taskTitle");
	check("taskType");

	filter("taskTitle").escape();
	filter("taskType").escape();

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Tasks.create()
		.then(() => {
			return res.redirect(301, "/");
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
		Tasks.update()
		.then(() => {
			return res.redirect(301, "/");
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
		Tasks.delete()
		.then(() => {
			return res.redirect(301, "/");
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
		Evalus.find()
		.then(evalu => {
			return res.status(200).json(evalu);
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
		Evalus.update()
		.then(() => {
			return res.status(204).json(updatedEvalu).redirect(301, "/");
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
		Evalus.delete()
		.then(() => {
			return res.redirect(301, "/");
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}
