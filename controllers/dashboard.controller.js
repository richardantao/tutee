const async = require("async");
const moment = require("moment");

// import model
const User = require("../models/User.model").Model;
const Classes = require("../models/Classes.model").Schema;
const Tasks = require("../models/Tasks.model").Schema;
const Assessments = require("../models/Assessments.model").Schema;

// instantiate models
const controller = [];

// GET dashboard data
controller.index = (req, res) => {
	async.parallel({
		classes: (callback) => {
			User.find({ // find the user's: 
				"_id": req.params._id,	
				"class.start.date": { 
					$eq: moment().startOf("date").format("MMMM DD YYYY, hh:mm a ")
				}
			},{ 
				"class.course.title": 1,
				"class.module.title": 1,
				"class.location": 1,
				"class.start.date": 1,
				"clase.start.time": 1,
				"class.end.date": 1,
				"class.end.time": 1,
				"class.description": 1
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
			User.find({
				"_id": req.params._id,
				"tasks.deadline": {
					$gte: moment().startOf("date").format("MMMM DD YYYY"), // date is later than today
					$lte: moment().startOf("date").format("MMMM DD YYYY") + 1000*60*60*24*7 // date is less than 7 days from now
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
		assessments: (callback) => {
			User.find({
				"_id": req.params.id,
				"assessments.date": {
					$gte: moment().startOf("date").format("MMMM DD YYYY"),
					$lte: moment().startOf("date").format("MMMM DD YYYY") + 1000*60*60*24*7 
				}
			})
			.then(selectedAss => {
				return res.json(selectedAss);
			})
			.exec(callback)
			.catch(err => {
				return res.status(500).json({
					message: err.message || "An error occured while retrieving your assessments"
				});
			});
		}		
	}, (err, results) => {
		if(err) {
			throw err;
		} else {
		console.log("All the columns have been populated: " + results);
		}
	});
}

// GET display class editor for specific class
controller.classEdit = (req, res) => {
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
		if(err.kind === "ObjectId") {
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

controller.classUpdate = (req, res) => {
	Classes.findByIdAndUpdate({
		"_id": req.params._id
	},
	{
		"": 1,
		"": 1
	})
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
controller.taskEdit = (req, res) => {
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
controller.taskNew = (req, res) => {
	User.find({
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
controller.taskCreate = (req, res) => {
	async.waterfall([
		create,
		associate
	], (err, results) => {
		if(err) {
			throw err;
		} else {
			console.log("The sequence of requests has completed: " + results)
		}
	});

	const create = (callback) => {
		const task = new Tasks({
			"userId": req.params._id,
			"module.title": req.params.moduleTitle,
			"title": req.body.title,
			"type": req.body.type,
			"deadline": req.body.deadline,
			"completion": req.body.completion,
			"note": req.body.note,
			"meta": {
				createdAt: moment().startOf("minute").format("MMMM DD YYYY, hh:mm"),
				updatedAt: moment().startOf("minute").format("MMMM DD YYYY, hh:mm")
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
			})
		});
	}

	const associate = (pendingTask, callback) => {
		User.findByIdAndUpdate({
			"_id": req.params._id
		},
		{
			$set: {
				"module.id": req.params.moduleId,
				"module.title": req.params.moduleTitle,
			}
		})
		.then(associatedTask => {
			if(!associatedTask) {
				return res.status(404).json({
					message: "The server was unable find the resources to process your request"
				});
			} else {
				return res.status(200).json(associatedTask);
			}
		})
		.exec(callback)
		.catch(err => {
			if(err.kind === "ObjectId") {
				return res.status(404).json({
					message: "The server was unable find the resources to process your request"
				});
			} else {
				return res.status(500).json({
					message: err.message || "An error occured while processing your request"
				});
			}
		});
	}
}

//
controller.taskUpdate = (req, res) => {
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

controller.taskDelete = (req, res) => {
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

controller.assessmentEdit = (req, res) => {
	Assessments.findById({
		"_id": req.params._id
	})
	.then(selectedAss => {
		if(!selectedAss) {
			return res.status(404).json({
				message: "The assessment you selected was not successfully found"
			});
		} else {
			return res.json(selectedAss);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).json({
				message: "The assessment you selected was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the assessment"
			});
		}
	});
}

controller.assessmentUpdate = (req, res) => {
	// define updated attributes
	Assessments.findByIdAndUpdate({
		"_id": req.params._id
	}, 
	{

	})
	.then(updatedAss => {
		if(!updatedAss) {
			return res.status(404).json({
				message: "The assessment you are attempting to update was not successfully found"
			});
		} else {
			return res.json(updatedAss);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The assessment you are attempting to update was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this assessment"
			});
		}
	});
}

controller.assessmentDelete = (req, res) => {
	Ass.findByIdAndDelete({
		"_id": req.params._id
	})
	.then(deletedAss => {
		if(!deletedAss) {
			return res.status(400).json({
				message: "The assessment you are trying to delete was not successfully found"
			});
		} else {
			return res.json(deletedAss);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId' || err.name === 'NotFound') {
			return res.status(404).json({
				message: "The assessment you are trying to delete was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occuring while deleting this assessment"
			});
		}
	});
}

module.exports = controller;