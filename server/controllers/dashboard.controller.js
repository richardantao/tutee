const async = require("async");
const moment = require("moment");

// import models
const Classes = require("../models/Classes.model");
const Tasks = require("../models/Tasks.model");
const Evals = require("../models/Evaluations.model");

// instantiate models
const controller = [];

// GET dashboard data
controller.index = (req, res) => {
	async.parallel({
		classes: (callback) => {
			// find classes where date equals today's date
			Classes.find({
				"_id": req.params.id,
				"start.date": {
					$eq: moment().startOf("date").format("MMMM Do YYYY, hh:mm a ")
				}
			},{
				"course.title": 1,
				"module.title": 1,
				"location": 1,
				"start.date": 1,
				"start.time": 1,
				"end.date": 1,
				"end.time": 1
			})
			.then(selectedClasses => {
				if(!selectedClasses) {
					return res.status(404).json({
						message: "The classes attempting to be retrieved were not successfully found"
					});
				} else {
					return res.json(selectedClasses);
				}
			})
			.exec(callback)
			.catch(err => {
				return res.status(500).json({
					message: err.message || "An error occured while retrieving your classes"
				});
			});
		},
		tasks: (callback) => {
			// find tasks where due date is within 7 days
			Tasks.find({
				"parents.user.id": req.params.id,
				deadline: {
					$gte: moment().startOf("date").format("MMMM Do YYYY"), // date is later than today
					$lte: moment().startOf("date").format("MMMM Do YYYY") + 1000*60*60*24*7 // date is less than 7 days from now
				}
			})
			.then(selectedTasks => {
				return res.json(selectedTasks);
			})
			.exec(callback)
			.catch(err => {
				return res.status(500).json({
					message: err.message || "An error occured while retrieving your tasks"
				});
			});
		},
		evaluations: (callback) => {
			// find evaluations where dude date is within 10 days
			Evals.find({
				"parents.user.id": req.params.id,
				date: {
					$gte: moment().startOf("date").format("MMMM Do YYYY"), // date is later than today
					$lte: moment().startOf("date").format("MMMM Do YYYY") + 1000*60*60*24*7 // date is less than 7 days from now
				}
			})
			.then(selectedEvals => {
				return res.json(selectedEvals);
			})
			.exec(callback)
			.catch(err => {
				return res.status(500).json({
					message: err.message || "An error occured while retrieving your evaluations"
				});
			});
		}		
	});
}

// GET display class editor for specific class
controller.classEdit = (req, res) => {
	Classes.findById({
		_id: req.params._id,
		"classes._id": req.params.classes._id
	},{

	})
	.then(selectedClass => {
		if(!selectedClass) {
			return res.status(404).json({
				message: "The class you selected was not successfully found"
			});
		} else {
			return res.json(selectedClass);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).json({
				message: "The class you selected was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the class"
			})
		}
	});
};

// DELETE class
controller.classDelete = (req, res) => {
	Classes.findByIdAndDelete(req.params.id)
	.then(deletedClass => {
		if(!deletedClass) {
			return res.status(400).json({
				message: "The class you are trying to delete was not successfully found"
			});
		} else {
			return res.json(deletedClass);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).json({
				message: "The class you are trying to delete was not successfully found"
			})
		} else {
			return res.status(500).json({
				message: err.message || "An error occuring while deleting this class"
			});
		}
	});
}

//
controller.taskEdit = (req, res) => {
	Tasks.findById(req.params.id)
	.then(selectedTask => {
		if(!selectedTask) {
			return res.status(404).json({
				message: "The task you selected was not successfully found"
			});
		} else {
			return res.json(selectedTask);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).json({
				message: "The task you selected was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the task"
			})
		}
	});
}

//
controller.taskNew = (req, res) => {

}

//
controller.taskCreate = (req, res) => {
	const task = new Tasks({
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
		})
	});
}

//
controller.taskUpdate = (req, res) => {
	// define updated attributes
	// use set to only update the following attributes
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
				message: "The task you are attempting to update was not successfully found"
			});
		} else {
			return res.json(updatedTask);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The task you are attempting to update was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this task"
			});
		}
	});
}

controller.taskDelete = (req, res) => {
	Tasks.findByIdAndDelete(req.params.id)
	.then(deletedTask => {
		if(!deletedTask) {
			return res.status(400).json({
				message: "The task you are trying to delete was not successfully found"
			});
		} else {
			return res.json(deletedTask);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).json({
				message: "The task you are trying to delete was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occuring while deleting this task"
			});
		}
	});
}

controller.evalEdit = (req, res) => {
	Evals.findById(req.params.id)
	.then(selectedEval => {
		if(!selectedEval) {
			return res.status(404).json({
				message: "The evaluation you selected was not successfully found"
			});
		} else {
			return res.json(selectedEval);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).json({
				message: "The evaluation you selected was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the evaluation"
			});
		}
	});
}

controller.evalUpdate = (req, res) => {
	// define updated attributes
	Evals.findByIdAndUpdate(req.params.id, {

	})
	.then(updatedEval => {
		if(!updatedEval) {
			return res.status(404).json({
				message: "The evaluation you are attempting to update was not successfully found"
			});
		} else {
			return res.json(updatedEval);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The evaluation you are attempting to update was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this evaluation"
			});
		}
	});
}

controller.evalDelete = (req, res) => {
	Evals.findByIdAndDelete(req.params.id)
	.then(deletedEval => {
		if(!deletedEval) {
			return res.status(400).json({
				message: "The evaluation you are trying to delete was not successfully found"
			});
		} else {
			return res.json(deletedEval);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).json({
				message: "The evaluation you are trying to delete was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occuring while deleting this evaluation"
			});
		}
	});
}

module.exports = controller;