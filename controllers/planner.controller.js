const async = require("async");
const moment = require("moment");

const User = require("../models/User.model").Model;

const controller = [];

controller.index = (req, res) => {
    async.parallel({
        tasks: (callback) => {
            User.find({
                "_id": req.params._id, 
                "task.deadline": {
                    $gte: moment().startOf("date").format("MMMM DD YYYY")
                }
            },{
                "task": 1
            })
            .then(tasks => {
                if(!tasks) {
                    return res.status(404).json({
                        message: "The server was unable to successfully find your tasks"
                    });
                } else {
                    return res.status(200).json(tasks);
                }
            })
            .exec(callback)
            .catch(err => {
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
        },
        assessments: (callback) => {
            User.find({
                "_id": req.params._id,
                "assessment.date": {
                    $gte: moment().startOf("date").format("MMMM DD YYYY")
                }
            })
            .then(assessments => {
                return res.status(200).json(assessments);
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
            return res.status(500).json({
                error: err.message
            });
        } else {
            return res.status(200).json(results);
        };
    });
};

controller.past = (req, res) => {
    async.parallel({
        tasks: (callback) => {
            User.find({
                "_id": req.params._id, 
                "task.deadline": {
                    $lt: moment().startOf("date").format("MMMM DD YYYY")
                }
            },{
                "task": 1
            })
            .then(tasks => {
                if(!tasks) {
                    return res.status(404).json({
                        message: "The server was unable to successfully find your tasks"
                    });
                } else {
                    return res.status(200).json(tasks);
                }
            })
            .exec(callback)
            .catch(err => {
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
        },
        assessments: (callback) => {
            User.find({
                "_id": req.params._id,
                "assessment.date": {
                    $lt: moment().startOf("date").format("MMMM DD YYYY")
                }
            },{
                "assessment": 1
            })
            .then(assessments => {
                return res.status(200).json(assessments);
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
            return res.status(500).json({
                message: err.message || "The server experienced an error while processing your request"
            });
        } else {
            return res.status(200).json(results);
        };
    });
};

controller.taskNew = (req, res) => {
    User.find({
		"_id": req.params._id
	}, 
	{
		"module.title": 1
	})
	.then(selectedModules => {
		if(!selectedModules) {
			return res.status(404).json({
				message: "The server was unable to successfully find your courses"
			});
		} else {
			return res.status(200).json(selectedModules);
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
};

controller.taskCreate = (req, res) => {
    const { id } = req.params;
    const { moduleId, title, type, deadline } = req.body;

    const task = new Tasks({
        userId,
        moduleId,
        title,
        type,
        deadline,
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
};

controller.taskEdit = (req, res) => {
    User.findById({
		"task._id": req.params._id
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
};

controller.taskUpdate = (req, res) => {

};

controller.taskDelete = (req, res) => {

};

controller.assessmentNew = (req, res) => {

};

controller.assessmentCreate = (req, res) => {

};

controller.assessmentEdit = (req, res) => {

};

controller.assessmentUpdate = (req, res) => {

};

controller.assessmentDelete = (req, res) => {

};



module.exports = controller;