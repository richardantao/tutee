/* Possible to assimiliate into one route */

const moment = require("moment");

// import models
const Classes = require("../models/Classes.model");
const Tasks = require("../models/Tasks.model");
const Evals = require("../models/Evaluations.model");

const async = require("async");

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
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occured when retrieving your evaluations"
                });
            });
        }
    });
}

controller.classNew = (req, res) => {
    
}

controller.classCreate = (req, res) => {
    const newClass = new Classes({
    parents: {
        user: {
			id: req.params.id,
			name: {
				first: req.params.fname,
				last: req.params.lname
			}
        },
        course: {
            id: req.params.course,
            title: {type: String, required: true}
        },
		module: {
			id: {type: Schema.Types.ObjectId, required: true},
            type: {type: String, required: true}
		}      
    },
    location: String,
    start: {
        date: {type: Date, required: true},
        time: {type: String, required: true}
    },
    end: {
        date: {type: Date, required: true},
        time: {type: String, required: true}
    },
    repeat: {
        Monday: {type: Boolean, default: false},
        Tuesday: {type: Boolean, default: false},
        Wednesday: {type: Boolean, default: false},
        Thursday: {type: Boolean, default: false},
        Friday: {type: Boolean, default: false},
        Saturday: {type: Boolean, default: false},
        Sunday: {type: Boolean, default: false},
    },
    occurence: {type: String, enum: ["Does not repeat", "Daily", "Weekdays", "Weekly", "Biweekly"]},
    description: String,
    meta: {
	    createdAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")},
        updatedAt: {type: Date, default: () => moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")}
    }
	});

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