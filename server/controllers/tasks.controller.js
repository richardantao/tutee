// import model
const Tasks = require("../models/Tasks.model");
const Courses = require("../models/Courses.model");
const Modules = require("../models/Modules.model");

// instantiate controller
const controller = [];

controller.index = (req, res) => {
	Tasks.find()
    .then(tasks => {
        return res.json(tasks);
    }).catch(err => {
        return res.status(500).json({
            message: err.message || "An error occured while retrieving your tasks"
        });
    });
}

controller.past = (req, res) => {
	
}

controller.edit = (req, res) => {
	Tasks.findById(req.params.id)
	.then(selectedTask => {
		if(!selectedTask) {
			return res.status(404).json({
				message: "This task could not be successfully found"
			});
		} else {
			return res.json(selectedTask);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "This task could not be successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving this task"
			});
		}
	});
}

controller.createGet = (req, res) => {
	const today = new Date();
	
	Courses.find({
		"parents.user": req.params.id, 
		"date.start": "$lte new Date()", 
		"date.end": "$gte new Date()"
	}, {
		"title": 1
	})
	.then(Modules.find({
			"parents.user": req.params.id,
			"parents.course": "" // define the id | change name of id suffixes or other method
		}, {
			"title": 1
		})
	)
	.then(selectedParents => {
		if(!selectedParents) {
			return res.status(404).json({
				message: "The server was unable to successfully find your courses"
			});
		} else {
			return res.json(selectedParents);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find your courses"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving your courses"
			});
		}
	});
}

controller.createPost = (req, res) => {
	const task = new Tasks({
		parent: {
			user: req.body.id,
			course: req.body.course,
			module: req.body.module
		},
		title: req.body.title,
		type: req.body.type,
		deadline: req.body.deadline,
		completion: req.body.completion,
		note: req.body.note,
		meta: {
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	});

	task.save()
	.then(newTask => {
		return res.json(newTask);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating this task"
		});
	});
}

controller.update = (req, res, next) => {
	// set attributes to prevent total override
	Tasks.findByIdAndUpdate(req.params.id, {
		$set: {
			title: req.body.title,
			type: req.body.type,
			deadline: req.body.deadline,
			completion: req.body.completion,
			note: req.body.note,
			meta: {
				updatedAt: Date.now()
			}
		}
	})
	.then(updatedTask => {
		if(!updatedTask) {
			return res.status(404).json({
				message: "This task was not successfully found"
			});
		} else {
			return res.json(updatedTask);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "This task was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this task"
			});
		}
	})
}	

controller.delete = (req, res) => {
	Tasks.findByIdAndDelete(req.params.id)
	.then(deletedTask => {
		if(!deletedTask) {
			return res.status(400).json({
				message: "This task was not successfully found"
			});
		} else {
			return res.json(deletedTask);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).json({
				message: "This task was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting this task"
			})
		}
	});
}

module.exports = controller;






