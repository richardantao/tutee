const async = require("async");
const moment = require("moment");

// import model
const Users = require("../models/Users.model").Model;
const Classes = require("../models/Classes.model").Schema;
const Tasks = require("../models/Tasks.model").Schema;
const Evaluations = require("../models/Evaluations.model").Schema;

// instantiate models
const controller = [];

// GET dashboard data
controller.index = (req, res, next) => {
	async.parallel({
		classes: (callback) => {
			// find classes where date equals today's date
			Users.find({ // find the user's: 
				"_id": req.params._id,	// where the user id equals
				"classes.start.date": { // where the classes start date is today
					$eq: moment().startOf("date").format("MMMM Do YYYY, hh:mm a ")
				}
			},{ // retrieve these documents
				"classes.course.title": 1,
				"classes.module.title": 1,
				"classes.location": 1,
				"classes.start.date": 1,
				"clasess.start.time": 1,
				"classes.end.date": 1,
				"classes.end.time": 1,
				"classes.description": 1
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
			Users.find({
				"_id": req.params._id,
				"tasks.deadline": {
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
			Users.find({
				"_id": req.params.id,
				"evaluations.date": {
					$gte: moment().startOf("date").format("MMMM Do YYYY"),
					$lte: moment().startOf("date").format("MMMM Do YYYY") + 1000*60*60*24*7 
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
controller.classEdit = (req, res, next) => {
	Classes.findById({
		_id: req.params._id,
	},{
		"course.title": 1,
		"module.id": 1,
		"location": 1,
		"start.date": 1,
		"start.time": 1,
		"end.date": 1,
		"end.time": 1
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

controller.classUpdate = (req, res, next) => {

}

// DELETE class
controller.classDelete = (req, res) => {
	Classes.findByIdAndDelete({
		"_id": req.params._id
	})
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
		if(err.kind === "ObjectId" || err.name === "NotFound") {
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
controller.taskEdit = (req, res, next) => {
	Tasks.findById({
		"_id": req.params.id
	})
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
		if(err.kind === "ObjectId") {
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
controller.taskNew = (req, res, next) => {
	Users.find({
		"_id": req.params._id,
	},
	{
		"modules.id": 1,
		"modules.title": 1
	})
	.then(taskProps => {
		if(!taskProps) {
			return res.status(404).json({
				message: "The server was unable to successfully find the resources needed for your request" 
			});
		} else {
			return res.status(200).json(taskProps);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find the resources needed for your request" 
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occurred while processing your request"
			});
		}
	});
}

//
controller.taskCreate = (req, res, next) => {
	const task = new Tasks({
		"userId": req.params._id,
		"module.id": req.params.moduleId,
		"module.title": req.params.moduleTitle,
		"title": req.body.title,
		"type": req.body.type,
		"deadline": req.body.deadline,
		"completion": req.body.completion,
		"note": req.body.note,
		"meta": {
			createdAt: moment().startOf("minute").format("MMMM Do YYYY, hh:mm"),
			updatedAt: moment().startOf("minute").format("MMMM Do YYYY, hh:mm")
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
controller.taskUpdate = (req, res, next) => {
	Tasks.findByIdAndUpdate({
		"_id": req.params.tasks._id
	}, 
	{
		$set: {
			"title": req.body.title,
			"type": req.body.type,
			"deadline": req.body.deadline,
			"completion": req.body.completion,
			"note": req.body.note,
			"meta": {
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

controller.taskDelete = (req, res, next) => {
	Tasks.findByIdAndDelete({
		"_id": req.params._id
	})
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

controller.evalEdit = (req, res, next) => {
	Evals.findById({
		"_id": req.params._id
	})
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

controller.evalUpdate = (req, res, next) => {
	// define updated attributes
	Evals.findByIdAndUpdate({
		"_id": req.params._id
	}, 
	{

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

controller.evalDelete = (req, res, next) => {
	Evals.findByIdAndDelete({
		"_id": req.params._id
	})
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