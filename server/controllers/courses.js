// import dependencies
const Years = require("../models/Years");
const Terms = require("../models/Terms");
const Courses = require("../models/Courses");
const Modules = require("../models/Modules");

// import validation functions
const { check, validationResult, filter } = require("express-validator");

// resolved .then()
exports.index = (req, res) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Years.findAll()
		.then(selectedData => {
			return res.status(204).json({ selectedData });
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request when user tries to edit a specific year
exports.yearsEdit = (req, res) => {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		Years.find()
		.then(selectedYear => {
			return res.status(200).json(selectedYear).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};
	
// check to see if can combine with route above
exports.yearsCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Years.find()
		.then(newYear => {
			return res.status(200).json(newYear);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// POST request after user SUBMITS the "New Academic Year" form
exports.yearsCreatePost = function(req, res) {
	const errors = validationResult(req);

	// validate input fields
	
	check("title").isLength({ min:1 }).trim().withMessage("Title must be specified").isAlphanumeric().withMessage("Title must only contain alphanumeric characters [A-Z] OR [0-9]");
	check("start").isLength({ min:1 }).trim().withMessage("Start date must be specified").toDate();
	check("end").isLength({ min:1 }).trim().withMessage("End date must be specified").toDate();
		
	// ^ start and end dates still need to be checked to see whether they are logically correct | correct format and input | start is before end || do on front-end??

	// [ / (0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d /g ]  regex for dd/mm/yyyy or dd-mm-yyyy or dd.mm.yyyy
		
	// sanitize inputs fields
	filter("title").escape();
	filter("start").escape();
	filter("end").escape();
		
	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new year object
		Years.create()
		.then(createdYear => {
			return res.status(201).json(createdYear).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after user SAVES the Year editer form
exports.yearsUpdate = (req, res, next) => {
	const errors = validationResult(req);

	// validate inputs | replace with whitelist
	check("title").isLength({ min:1 }).trim().withMessage("Title must be specified").isAlphanumeric().withMessage("Title must only contain alphanumeric characters [A-Z] OR [0-9]");
	check("start").isLength({ min:1 }).trim().withMessage("Start date must be specified").toDate();
	check("end").isLength({ min:1 }).trim().withMessage("End date must be specified").toDate();
	
	// sanitize inputs
	filter("title").escape();
	filter("start").escape();
	filter("end").escape();
		
	if(!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Years.update()
		.then(updatedYear => {
        	return res.status(204).json(updatedYear).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// DELETE request after user DELETES the Year editor form
exports.yearsDelete = (req, res) => {
	const errors = validationResult(req);
		
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Years.delete()
		.then(deletedYear => {
			return res.status(204).json(deletedYear).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request when the user tries to edit a specific term
exports.termsEdit = (req, res) => {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find term by ID, and pass task as JSON with status code 200 to client to render
		Terms.find()
		.then(selectedTerm => {
			return res.status(204).json(selectedTerm).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.termsCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Terms.find()
		.then(newTerm => {
			return res.status(200).json(newTerm);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}	
	
// POST request after user SUBMITS the "New Term" form
exports.termsCreatePost = (req, res) => {
	const errors = validationResult(req);

	// validate and sanitize fields
	check("title").isLength({ min:1 }).trim().withMessage("Title must be specified").isAlphanumeric().withMessage("Title must only contain alphanumeric characters [A-Z] OR [0-9]").escape();
	check("start").isLength({ min:1 }).trim().withMessage("Start date must be specified").toDate().escape();
	check("end").isLength({ min:1 }).trim().withMessage("End date must be specified").toDate().escape();
	check("rotation").isLength({ min:1 }).trim().withMessage("You must choose a rotation").escape();
	
	// additional validation on the front end, make sure start date is before end date and within the year it belongs to
		
	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new term object
		Terms.create()
		.then(createdTerm => {
			return res.status(201).json(createdTerm).redirect(301, ""); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after user SUBMITS the Term editer form
exports.termsUpdate = (req, res, next) => {
	const errors = validationResult(req);

	// validate and sanitize fields
	check("title").isLength({ min:1 }).trim().withMessage("Title must be specified").isAlphanumeric().withMessage("Title must only contain alphanumeric characters [A-Z] OR [0-9]");
	check("start").isLength({ min:1 }).trim().withMessage("Start date must be specified").toDate();
	check("end").isLength({ min:1 }).trim().withMessage("End date must be specified").toDate();
	check("rotation").isLength({ min:1 }).trim().withMessage("You must choose a rotation");
	
	
	// sanitize inputs
	filter("title").escape();
	filter("start").escape();
	filter("end").escape();
	filter("rotation").escape();
	
	// additional validation on the front end, make sure start date is before end date and within the year it belongs to
		
	if(!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Terms.update()
		.then(updatedTerm => {
        	return res.status(204).json(updatedTerm).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// DELETE request after user DELETES the Term editer form
exports.termsDelete = (req, res) => {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Terms.delete()
		.then(deletedTerm => {
			return res.status(204).json(deletedTerm).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request after user tries to edit a specific course
exports.coursesEdit = (req, res) => {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find term by ID, and pass task as JSON with status code 200 to client to render
		Courses.find()
		.then(selectedCourse => {
			return res.status(204).json(selectedCourse).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.coursesCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Courses.find()
	  .then(newCourse => {
		  return res.status(204).json(newCourse).redirect(301, "/"); // verify redirect status code during unit testing;	
	  })
	  .catch(() => {
		  return res.status(500).json({ errors: errors.array() });
	  });
	}
}
	
// POST request after user SUBMITS the "New Course" form 
exports.coursesCreatePost = (req, res) => {
		const errors = validationResult(req);

	// validate and sanitize input fields
	check("code").isLength({ min:1 }).trim().withMessage("Course code must be specified").isAlphanumeric().with("Course code must only contain alphanumeric characters [A-Z] AND [0-9]").escape(); // use ^[a-zA-Z0-9.-]+$ in whitelist
	check("name").isLength({ min:1 }).trim().withMessage("Course name must be specified").escape();
	check("theme").isLength({ min:1 }).trim().withMessage("Course theme must be specified").escape();
	
	// sanitize inputs
	filter("code").escape();
	filter("name").escape();
	filter("theme").escape();
		
	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new course object
		Courses.create()
		.then(createdCourse => {
			return res.status(201).json(createdCourse).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after user SAVES the Course editer form
exports.coursesUpdate = (req, res, next) => {
	const errors = validationResult(req);

	// validate and sanitize input fields
	check("code").isLength({ min:1 }).trim().withMessage("Course code must be specified").isAlphanumeric().with("Course code must only contain alphanumeric characters [A-Z] AND [0-9]");
	check("name").isLength({ min:1 }).trim().withMessage("Course name must be specified");
	check("theme").isLength({ min:1 }).trim().withMessage("Course theme must be specified");
	
	filter("code").escape();
	filter("name").escape();
	filter("theme").escape();
		
	if(!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Courses.update()
		.then(updatedCourse => {
        	return res.status(204).json(updatedCourse).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// DELETE request after user DELETES the Course editer Form
exports.coursesDelete = (req, res) => {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Courses.delete()
		.then(deletedCourse => {
			return res.status(204).json(deletedCourse).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request after a user attempts to retrieve a specific module
exports.modulesEdit = (req, res) => {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find term by ID, and pass task as JSON with status code 200 to client to render
		Modules.find()
		.then(selectedModule => {
			return res.status(204).json(selectedModule).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.modulesCreateGet = (req, res) => {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Modules.find()
		.then(newModule => {
			return res.status(204).json(newModule);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}	
	
// POST request after the user SUBMITS the "New Module" form
exports.modulesCreatePost = (req, res) => {
	const errors = validationResult(req);

	// validate inputs
	check("type");
	check("course");
	check("start");
	check("end");
	check("instructor");
	
	// sanitize inputs
	filter("type").escape();
	filter("course").escape();
	filter("start").escape();
	filter("end").escape();
	filter("instructor").escape();
		
	// check for errors and render JSON error if true
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		// use POST parameters from form inputs to generate a new course object
		Modules.create()
		.then(createdModule => {
			return res.status(201).json(createdModule).redirect(301, "..");
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array()} );
		});
	}
}

// PUT request after the user SAVES the Modules editer form
exports.modulesUpdate = (req, res, next) => {
	const errors = validationResult(req);

	// validate inputs
	check("type");
	check("course");
	check("start");
	check("end");
	check("instructor");
	
	// sanitize inputs
	filter("type").escape();
	filter("course").escape();
	filter("start").escape();
	filter("end").escape();
	filter("instructor").escape();
		
	if(!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Modules.update()
		.then(updatedModule => {
        	return res.status(204).json(updatedModule).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});  
	}
}

// DELETES request after the user DELETES the Modules editer form
exports.modulesDelete = (req, res) => {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Modules.delete()
		.then(deletedModule => {
			return res.status(204).json(deletedModule).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}