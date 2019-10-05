const Tasks = require("../models/Tasks.test");
const { check, validationResult, filter } = require("express-validator");

exports.tasksPast = (req, res) => {
    const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({errors: errors.array() });
	} else {
		Tasks.findAll()
		.then(tasks => {
			return res.status(204).json(tasks);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}