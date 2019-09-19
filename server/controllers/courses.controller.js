// import models
const Years = require("../models/Years.model");
const Terms = require("../models/Terms.model");
const Courses = require("../models/Courses.model");
const Modules = require("../models/Modules.model");

const async = require("async");

// instantiate controller
const controller = [];

// resolved .then()
controller.index = (req, res) => {
	async.parallel({
		years: (callback) => {
			Years.find()
			.then(years => {
				return res.json(years);	
			})
			.catch(err => {
				return res.status(500).json({
					message: "An error occured while retrieving the academic years"
				});
			});
		},
		terms: (callback) => {
			Terms.find()
			.then(terms => {
				return res.json(terms);
			})
			.catch(err => {
				return res.status(500).json({
					message: "An error occured while retrieving your terms"
				});
			});
		},
		courses: (callback) => {
			Courses.find()
			.then(courses => {
				return res.json(courses);
			})
			.catch(err => {
				return res.status(500).json({
					message: "An error occured while retrieving your courses"
				});
			});
		},
		modules: (callback) => {
			Modules.find()
			.then(modules => {
				return res.json(modules);
			})
			.catch(err => {
				return res.status(500).json({
					message: "An error occured while retrieving your modules"
				});
			});
		}
	});
}

// GET request when user tries to edit a specific year
controller.yearsEdit = (req, res) => {
	Years.findById(req.params.id)
	.then(selectedYear => {
		if(!selectedYear) {
			return res.status(404).json({
				message: "The server was unable to successfully retrieve the selected academic year"
			});
		} else {
			return res.json(selectedYear);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully retrieve the selected academic year"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the selected academic year"
			});
		}
	});
};
	
// check to see if can combine with route above
controller.yearsCreateGet = (req, res) => {
	
}

// POST request after user SUBMITS the "New Academic Year" form
controller.yearsCreatePost = function(req, res) {
	const year = new Years({
		parents: {
			user: req.body.user
		},
		title: req.body.title,
		date: {
			start: req.body.startDate,
			end: req.body.endDate
		},
		meta: {
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	});

	year.save()
	.then(newYear => {
		return res.json(newYear);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating a new academic year"
		});
	});
}

// PUT request after user SAVES the Year editer form
controller.yearsUpdate = (req, res, next) => {
	Years.findByIdAndUpdate(req.params.id, {
		$set: {
			title: req.body.title,
			date: {
				start: req.body.startDate,
				end: req.body.endDate
			},
			meta: {
				updatedAt: Date.now()
			}
		}
	})
	.then(updatedYear => {
		if(!updatedYear) {
			return res.status(404).json({
				message: "The server was unable to successfully find the academic year"
			});
		} else {
			return res.json(updatedYear);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find the academic year"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating the academic year"
			});
		}
	})
}

controller.yearsDelete = (req, res) => {
	Years.findByIdAndDelete(req.params.id)
	.then(deletedYear => {
		if(!deletedYear) {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected academic year"
			});
		} else {
			return res.json(deletedYear);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId" || err.name === "NotFound") {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected academic year"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting this academic year"
			});
		}
	});
}

controller.termsEdit = (req, res) => {
	Terms.findById(req.params.id)
	.then(selectedTerm => {
		if(!selectedTerm) {
			return res.status(404).json({
				message: "The server was unable to find the selected Term" 
			});
		} else {
			return res.json(selectedTerm);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to find the selected Term" 
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the selected Term" 
			});
		}
	});
}

controller.termsCreateGet = (req, res) => {

}	
	
controller.termsCreatePost = (req, res) => {
	const term = new Terms({
		parent: {
			user: req.body.id,
			year: req.body.year
		},
		title: req.body.title,
		date: {
		  start: req.body.startDate,
		  end: req.body.endDate
		},
		rotation: req.body.rotation,
		meta: {
		  createdAt: Date.now(),
		  updatedAt: Date.now()
		}
	});

	term.save()
	.then(newTerm => {
		return res.json(newTerm);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating your new Term"
		});
	})
}

controller.termsUpdate = (req, res) => {
	Terms.findByIdAndUpdate(req.params.id, {
		$set: {
			title: req.body.title,
			date: {
			start: req.body.startDate,
			end: req.body.endDate
			},
			rotation: req.body.rotation,
			meta: {
			updatedAt: Date.now()
			}
		}
	})
	.then(updatedTerm => {
		if(!updatedTerm) {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected Term"
			});
		} else {
			return res.json(updatedTerm);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected Term"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this Term"
			});
		}
	});
}

controller.termsDelete = (req, res) => {
	Terms.findByIdAndDelete(req.params.id)
	.then(deletedTerm => {
		if(!deletedTerm) {
			return res.status(404).json({
				message: "The server was unable to find the selected Term"
			});
		} else {
			return res.json(deletedTerm);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId" || err.name === "NotFound") {
			return res.status(404).json({
				message: "The server was unable to find the selected Term"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting this Term"
			});
		}
	});
}

controller.coursesEdit = (req, res) => {
	Courses.findById(req.params.id)
	.then(selectedCourse => {
		if(!selectedCourse) {
			return res.status(404).json({
				message: "The server was unable to find the selected Course" 
			});
		} else {
			return res.json(selectedCourse);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to find the selected Course" 
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the selected Course" 
			});
		}
	});
}

controller.coursesCreateGet = (req, res) => {

}
	
controller.coursesCreatePost = (req, res) => {
	const course = new Courses({
		parents: {
			user: req.body.user,
			year: req.body.year
		},
		code: req.body.code,
		title: req.body.title,
		// theme: req.body.theme,
		date: {
			start: req.body.startDate,
			end: req.body.endDate
		},
		meta: {
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	});

	course.save()
	.then(newCourse => {
		return res.json(newCourse);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating your new Course"
		})
	});
}

controller.coursesUpdate = (req, res) => {
	Courses.findByIdAndUpdate(req.params.id, {
		$set: {
			code: req.body.code,
			title: req.body.title,
			theme: req.body.theme, 
			meta: {
				updatedAt: Date.now()
			}
		}
	})
	.then(updatedCourse => {
		if(!updatedCourse) {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected Course"
			});
		} else {
			return res.json(updatedCourse);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected Course"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this Course"
			});
		}
	});
}

controller.coursesDelete = (req, res) => {
	Courses.findByIdAndDelete(req.params.id)
	.then(deletedCourse => {
		if(!deletedCourse) {
			return res.status(404).json({
				message: "The server was unable to find the selected Course"
			});
		} else {
			return res.json(deletedCourse);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId" || err.name === "NotFound") {
			return res.status(404).json({
				message: "The server was unable to find the selected Course"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting this Course"
			});
		}
	});
}

controller.modulesEdit = (req, res) => {
	Modules.findById(req.params.id)
	.then(selectedModule => {
		if(!selectedModule) {
			return res.status(404).json({
				message: "The server was unable to find the selected Module" 
			});
		} else {
			return res.json(selectedModule);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to find the selected Module" 
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving the selected Module" 
			});
		}
	});
}

controller.modulesCreateGet = (req, res) => {

}	
	
controller.modulesCreatePost = (req, res) => {
	const modules = new Modules({
		type: req.body.type,
		date: {
			start: req.body.startDate,
			end: req.body.endDate
		},
		instructor: req.body.instructor,
		meta: {
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	});

	modules.save()
	.then(newModule => {
		return res.json(newModule);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating your new Module"
		})
	});
}

controller.modulesUpdate = (req, res, next) => {
	Modules.findByIdAndUpdate(req.params.id, {
		$set: {
			type: req.body.type,
			date: {
				start: req.body.startDate,
				end: req.body.endDate
			},
			instructor: req.body.instructor,
			meta: {
				updatedAt: Date.now()
			}
		}
	})
	.then(updatedModule => {
		if(!updatedModule) {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected Module"
			});
		} else {
			return res.json(updatedModule);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find the selected Module"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while updating this Module"
			});
		}
	});
}

controller.modulesDelete = (req, res) => {
	Modules.findByIdAndDelete(req.params.id)
	.then(deletedModule => {
		if(!deletedModule) {
			return res.status(404).json({
				message: "The server was unable to find the selected Module"
			});
		} else {
			return res.json(deletedModule);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId" || err.name === "NotFound") {
			return res.status(404).json({
				message: "The server was unable to find the selected Module"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting this Module"
			});
		}
	});
}

module.exports = controller;