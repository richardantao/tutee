const async = require("async");
const moment = require("moment");

// import models
const User = require("../models/User.model").Model;

// instantiate constroller
const controller = [];

controller.index = (req, res) => {
    return res.direct(301, "/")
}

controller.month = (req, res) => {
    const { _id } = req.params;

    async.parallel({
        classes: (callback) => {
            User.find({ _id }, {

            })
            .sort({  })
            .then(classes => {
                if(!classes) {
                    return res.status(404).json({
                        message: "The server was unable to find your classes"
                    });
                } else {
                    res.status(200).json(classes);
                }
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            User.find({ _id },{
                "task._id": 1,
                "task.parent": 1,
                "task._type": 1,
                "task.deadline": 1
            })
            .sort({  })
            .then(tasks => {
                if(!tasks) {
                    return res.status(404).json({
                        message: "The server was unable to find your tasks"
                    });
                } else {
                    res.status(200).json(tasks);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your tasks"
                });
            });
        },
        assessments: (callback) => {
            User.find({ _id }, {
                "assessment._id": 1,
                "assessment.parent": 1,
                "assessment.title": 1
            })
            .sort({  })
            .then(assessments => {
                if(!assessments) {
                    return res.status(404).json({
                        message: "The server was unable to find your assessments"
                    });
                } else {
                    res.status(200).json(assessments);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your evaluations"
                });
            });
        }
    });
}

controller.week = (req, res) => {
    const { _id } = req.params;

    async.parallel({
        classes: (callback) => {
            User.find({ _id }, {

            })
            .sort({  })
            .then(classes => {
                if(!classes) {
                    return res.status(404).json({
                        message: "The server was unable to find your classes"
                    });
                } else {
                    res.status(200).json(classes);
                }
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            User.find({ _id },{
                "task._id": 1,
                "task.parent": 1,
                "task._type": 1,
                "task.deadline": 1
            })
            .sort({  })
            .then(tasks => {
                if(!tasks) {
                    return res.status(404).json({
                        message: "The server was unable to find your tasks"
                    });
                } else {
                    res.status(200).json(tasks);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your tasks"
                });
            });
        },
        assessments: (callback) => {
            User.find({ _id }, {
                "assessment._id": 1,
                "assessment.parent": 1,
                "assessment.title": 1
            })
            .sort({  })
            .then(assessments => {
                if(!assessments) {
                    return res.status(404).json({
                        message: "The server was unable to find your assessments"
                    });
                } else {
                    res.status(200).json(assessments);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your evaluations"
                });
            });
        }
    });
}

controller.day = (req, res) => {
    const { _id } = req.params;

    async.parallel({
        classes: (callback) => {
            User.find({ _id }, {

            })
            .sort({  })
            .then(classes => {
                if(!classes) {
                    return res.status(404).json({
                        message: "The server was unable to find your classes"
                    });
                } else {
                    res.status(200).json(classes);
                }
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            User.find({ _id },{
                "task._id": 1,
                "task.parent": 1,
                "task._type": 1,
                "task.deadline": 1
            })
            .sort({  })
            .then(tasks => {
                if(!tasks) {
                    return res.status(404).json({
                        message: "The server was unable to find your tasks"
                    });
                } else {
                    res.status(200).json(tasks);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your tasks"
                });
            });
        },
        assessments: (callback) => {
            User.find({ _id }, {
                "assessment._id": 1,
                "assessment.parent": 1,
                "assessment.title": 1
            })
            .sort({  })
            .then(assessments => {
                if(!assessments) {
                    return res.status(404).json({
                        message: "The server was unable to find your assessments"
                    });
                } else {
                    res.status(200).json(assessments);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your evaluations"
                });
            });
        }
    });
}
	
controller.agenda = (req, res) => {
    const { _id } = req.params;

    async.parallel({
        classes: (callback) => {
            User.find({ _id }, {

            })
            .sort({  })
            .then(classes => {
                if(!classes) {
                    return res.status(404).json({
                        message: "The server was unable to find your classes"
                    });
                } else {
                    res.status(200).json(classes);
                }
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your classes"
                });
            });
        },
        tasks: (callback) => {
            User.find({ _id },{
                "task._id": 1,
                "task.parent": 1,
                "task._type": 1,
                "task.deadline": 1
            })
            .sort({  })
            .then(tasks => {
                if(!tasks) {
                    return res.status(404).json({
                        message: "The server was unable to find your tasks"
                    });
                } else {
                    res.status(200).json(tasks);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your tasks"
                });
            });
        },
        assessments: (callback) => {
            User.find({ _id }, {
                "assessment._id": 1,
                "assessment.parent": 1,
                "assessment.title": 1
            })
            .sort({  })
            .then(assessments => {
                if(!assessments) {
                    return res.status(404).json({
                        message: "The server was unable to find your assessments"
                    });
                } else {
                    res.status(200).json(assessments);
                };
            })
            .exec(callback)
            .catch(err => {
                return res.status(500).json({
                    message: err.message || "An error occurred on the server while retrieving your evaluations"
                });
            });
        }
    });
}

controller.newClass = (req, res) => {
    const { _id } = req.params;

    User.find({ _id }, {
        "module._id": 1,
        "module.title": 1
    })
    .sort({  }) // finish
    .then(props => {
        return res.status(200).json(props);
    }) 
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred on the server while processing your request"
        }); 
    });
}

controller.createClass = (req, res) => {
    const { Id, Title, title } = req.body;
    
    const Class = new Class({
        _id: ObjectId(),
        parent: {
            _id: Id,
            title: Title
        },
        title
    });

	Class.save()
	.then(createdClass => {
		return res.status(200).json(createdClass);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occurred on the server while creating this task"
		})
	});
};

controller.editClass = (req, res) => {
    const { classId } = req.params;

    User.find({ "class._id": classId }, {
        "class._id": 1,
        "class.parent": 1,
        "class.title": 1
    })
    .then(classes => {
        if(!classes) {
            return res.status(404).json({
                message: "The server was unable to find your classes"
            });
        } else {
            return res.status(200).json(classes);
        };
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred on the server while processing your request"
        });
    });
};

controller.updateClass = (req, res) => {
    const { classId } = req.params;
    const { Id, Title, title,  } = req.body;
    
    User.update({ "class._id": classId }, {
        $push: {
            class: {
                _id: classId,
                parent: {
                    _id: Id,
                    title: Title
                },
                title,
                meta: {
                    updatedAt: moment().utc(moment.utc().format()).local().format("YYYY MM DD, hh:mm")
                }
            }
        }
    })
    .then(revisedClass => {
        if(!revisedClass) {
            return res.status(404).json({
                message: "The server was unable to find your updated Class"
            }); 
        } else {
            return res.status(200).json(revisedClass);
        };
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred on the server while processing your request"
        });
    });
};

controller.deleteClass = (req, res) => {
    const { classId } = req.params;

    User.update({ "class._id": classId }, {
        $pull: {
            class: {
                _id: classId
            }
        }
    })
    .then(deletedClass => {
        return res.status(200).json(deletedClass);
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message || "An error occurred on the server while processing your request"
        });
    });
};

module.exports = controller;