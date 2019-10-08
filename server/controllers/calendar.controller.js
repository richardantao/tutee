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

module.exports = controller;