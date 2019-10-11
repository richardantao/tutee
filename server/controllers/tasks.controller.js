const async = require("async");
const moment = require("moment");

// import model
const Tasks = require("../models/Tasks.model");
const Courses = require("../models/Courses.model");
const Modules = require("../models/Modules.model");

// instantiate controller
const controller = [];

controller.index = (req, res, next) => {
	Tasks.find({
		"_id": req.params._id, 
		"deadline": {
			$gt: moment().startOf("date").format("MMMM Do YYYY")
		}
	})
    .then(tasks => {
		if(!tasks) {
			return res.status(404).json({
				message: "The server was unable to successfully find your tasks"
			});
		} else {
			return res.json(tasks);
		}
    }).catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find your tasks"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving your tasks"
			});
		}
    });
}

controller.past = (req, res, next) => {
	Tasks.find({
		"_id": req.params._id, 
		"deadline": {
			$lt: moment().startOf("date").format("MMMM Do YYYY")
		}
	})
	.then(pastTasks => {
		if(!pastTasks) {
			return res.status(404).json({
				message: "The server was unable to successfully find your past tasks"
			});
		} else {
			return res.status(200).json(pastTasks);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find your past tasks"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving your past tasks"
			});
		}
	});
}

controller.edit = (req, res) => {
	Tasks.findById({
		"_id": req.params._id
	})
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

controller.new = (req, res, next) => {
	const today = new Date();
	
	Courses.find({
		"parents.user": req.params.id, 
		"date.start": "$lte new Date()", 
		"date.end": "$gte new Date()"
	}, {
		"title": 1
	})
	.then(Modules.find({
			"parents.user": req.params._id,
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

controller.create = (req, res, next) => {
	async.waterfall([
		create,
		associate
	],(err, results) => {
		if(err) {
			throw err;
		} else {
			console.log("The results have arrived: " + results)
		}
	});

	const create = (callback) => {
		const task = new Tasks({
			userId: req.body.userId,
			module: {
				id: req.body.moduleId,
				title: req.body.moduleTitle
			},
			title: req.body.title,
			type: req.body.type,
			deadline: req.body.deadline,
			meta: {
				createdAt: Date.now(),
				updatedAt: Date.now()
			}
		});
	
		task.save()
		.then(newTask => {
			return res.json(newTask);
		})
		.exec(callback)
		.catch(err => {
			return res.status(500).json({
				message: err.message || "An error occured while creating this task"
			});
		});
	}

	const associate = (callback) => {
		Tasks.findByIdAndUpdate({
			"_id": req.params._id
		},
		{
			$set: {

			}
		})
		.then(associatedTask => {
			if(!associatedTask) {
				return res.status(404).json({
					message: "The server was unable to find the resources to process your request"
				});
			} else {
				return res.status(200).json(associatedTask);
			}
		})
		.exec(callback)
		.catch(err => {
			if(err.kind === "ObjectId") {
				return res.status(404).json({
					message: "The server was unable to find the resources to process your request"
				});
			} else {
				return res.status(500).json({
					message: err.message || "An error occured while processing your request"
				});
			}
		});
	}

	next();	
}

controller.update = (req, res, next) => {
	Tasks.findByIdAndUpdate({
		"_id": req.params._id
	}, 
	{
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

controller.delete = (req, res, next) => {
	Tasks.findByIdAndDelete({
		"_id": req.params._id
	})
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
		if(err.kind === "ObjectId" || err.name === "NotFound") {
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






