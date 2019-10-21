/* Possible to assimiliate into one route */
const async = require("async");
const moment = require("moment");

// import models
const Users = require("../models/Users.model").Model;
const Classes = require("../models/Classes.model");
const Tasks = require("../models/Tasks.model");
const Evals = require("../models/Evaluations.model");

// instantiate constroller
const controller = [];

controller.index = (req, res) => {
    return res.direct(301, "/")
}

controller.month = (req, res) => {
	async.parallel({
        classes: (callback) => {
            Classes.find()
            .then(classes => {
                return res.json(classes);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            Tasks.find()
            .then(tasks => {
                return res.json(tasks);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your tasks"
                });
            });
        },
        evaluations: (callback) => {
            Evals.find()
            .then(evals => {
                return res.json(evals);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your evaluations"
                });
            });
        }
    });
}

controller.week = (req, res) => {
    async.parallel({
        classes: (callback) => {
            Classes.find()
            .then(classes => {
                return res.json(classes);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            Tasks.find()
            .then(tasks => {
                return res.json(tasks);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your tasks"
                });
            });
        },
        evaluations: (callback) => {
            Evals.find()
            .then(evals => {
                return res.json(evals);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your evaluations"
                });
            });
        }
    });
}

controller.day = (req, res) => {
    async.parallel({
        classes: (callback) => {
            Classes.find()
            .then(classes => {
                return res.json(classes);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            Tasks.find()
            .then(tasks => {
                return res.json(tasks);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your tasks"
                });
            });
        },
        evaluations: (callback) => {
            Evals.find()
            .then(evals => {
                return res.json(evals);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your evaluations"
                });
            });
        }
    });
}
	
controller.agenda = (req, res) => {
    async.parallel({
        classes: (callback) => {
            Classes.find()
            .then(classes => {
                return res.json(classes);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            Tasks.find()
            .then(tasks => {
                return res.json(tasks);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your tasks"
                });
            });
        },
        evaluations: (callback) => {
            Evals.find()
            .then(evals => {
                return res.json(evals);
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your evaluations"
                });
            });
        }
    });
}

controller.classEdit = (req, res) => {
    
}

controller.classNew = (req, res) => {
    
}

controller.classCreate = (req, res) => {
    const newClass = new Classes();

	newClass.save()
	.then(createdClass => {
		return res.json(createdClass);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating this task"
		})
	});
}

controller.classUpdate = (req, res) => {
    
}

controller.classDelete = (req, res) => {

}

module.exports = controller;