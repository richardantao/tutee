// import dependencies
const Classes = require("../models/Classes");
const Tasks = require("../models/Tasks");
const Evals = require("../models/Evaluations");
const { check, validationResult, filter } = require("express-validator");

exports.index = function(req, res) {
	const error = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		return res.send("this route is working");
	}
};

// GET display class editor for specific class
exports.dashboardClassEdit = function(req, res) {
	const error = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		
	}
};

exports.dashboardClassDelete = function(req, res) {

		const error = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(422).json({ errors: errors.array() });
		} else {
			
		}
	}


exports.dashboardTaskEdit = function(req, res) {
	const error = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		
	}
};

exports.dashboardTaskCreateGet = function(req, res) {
	const errors = validationResult(req)
	
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		
	}
}

exports.dashboardTaskCreatePost = function(req, res) {
		
}

exports.dashboardTaskUpdate = function(req, res) {
		
}

exports.dashboardTaskDelete = function(req, res) {
		
}


exports.dashboardEvalEdit = function(req, res) {
	const error = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		
	}
}

exports.dashboardEvalUpdate = function(req, res) {
		
	}

exports.dashboardEvalDelete = function(req, res) {
		
}




