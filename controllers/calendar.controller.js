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

controller.index = (req, res, next) => {
    return res.direct(301, "/")
}

controller.month = (req, res, next) => {
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

controller.week = (req, res, next) => {
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

controller.day = (req, res, next) => {
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
	
controller.agenda = (req, res, next) => {
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

controller.classNew = (req, res, next) => {
    
}

controller.classCreate = (req, res, next) => {
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

controller.classUpdate = (req, res, next) => {
    
}

controller.classDelete = (req, res, next) => {

}

module.exports = controller;