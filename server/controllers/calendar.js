const { check, validationResult, filter } = require("express-validator");

exports.index = function (req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		
		// Sequelize SELECT using Find(), the default calendar view
		
		// return status code and selected object as JSON to the client to render
		return res.status(200).json();
	}
}

exports.calendarMonth = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// Sequelize SELECT using Find(), the month calendar view
		
		// return status code and selected object as JSON to the client to render
		return res.status(200).json();
	}
}

exports.calendarWeek = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// Sequelize SELECT using Find(), the week calendar view
		
		// return status code and selected object as JSON to the client to render
		return res.status(200).json();
	}
}

exports.calendarDay = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// Sequelize SELECT using Find(), the day calendar view
		
		// return status code and selected object as JSON to the client to render
		return res.status(200).json();
	}
}
	
exports.calendarAgenda = function(req, res) {
	const errors = validationResult(req);
	
	if (errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() })
	} else {
		// Sequelize SELECT using Find(), the calendar agenda
		
		// return selected object as JSON to the client to render
		return res.status(200).json();
	}
}