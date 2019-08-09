/* Courses Controller */

/* CRUD functions
GET - used to retrieve existing data; not changing server data or manipulating data | MySQL SELECT | SEQUELIZE Find()
POST - used to insert new record into database | MySQL INSERT | SEQUELIZE create()
PUT - used to update data into existing records | MySQL UPDATE | SEQUELIZE update()
DELETE - used to delete selected records| MySQL DELETE | SEQUELIZE destroy()
*/

/* Controller Structure  
 GET/index:
 1. render html 
 2. pass JSON values from database to SPA view 
 3. error handle all transactions
 
 GET/Edit:
 1. render html 
 2. pass JSON values from database into modal fields | Only selecting the conditional record(s)
 3. error handle all transactions
 
 POST/Create:
 1. validate and sanitize user input for new object 
 2. INSERT checked data into database 
 3. pass next function back to the index of the controller to rerender the new HTML and JSON (with new record)
 4. error handle all transactions
 
 PUT/Update:
 1. validate and sanitize user input for updated objects 
 2. UPDATE checked data into database | conditional on only the selected OBJECT_ID from the URL
 3. pass next function back to the index of the controller to rerender the new HTML and JSON (with updated record)
 4. error handle all transactions
 
 DELETE/Delete:
 1. query database with DELETE to remove record | condition needs to ensure that only the selected record(s) are deleted
 2. pass next function back to the index of the controller to rerender the new HTML and JSON (without deleted record)
 3. error handle all transactions
*/

// import dependencies
const Years = require("../models/Years");
const Terms = require("../models/Terms");
const Courses = require("../models/Courses");
const Modules = require("../models/Modules");
const { check, validationResult, filter } = require("express-validator");

// resolved .then()
exports.index = function(req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Years.findAll({

		})
		.then(selectedData => {
			return res.status(204).json({ selectedData });
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request when user tries to edit a specific year
exports.yearsEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find task by ID, and pass task as JSON with status code 200 to client to render
		Years.find({
      		where: { id: req.params.id}
		})
		.then(year => {
			return res.status(200).json(year).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
};
	
// check to see if can combine with route above
exports.yearsCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Years.find({	
			where: { id: req.params.id }
		})
		.then(year => {
			return res.status(200).json(year);
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
		Years.create({
			title: req.body.title,
			start: req.body.start,
			end: req.body.end
		})
		.then(year => {
			return res.status(201).json(year).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after user SAVES the Year editer form
exports.yearsUpdate = function(req, res, next) {
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
		Years.find({
      		where: { id: req.params.id }
		})
		.then(Years => {
        	return Years.updateAttributes({
				title: req.body.title,
				start: req.body.start,
				end: req.body.end
			})
		})
		.then(updatedYear => {
        	return res.status(204).json(updatedYear).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// DELETE request after user DELETES the Year editor form
exports.yearsDelete = function(req, res) {
	const errors = validationResult(req);
		
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Years.destroy({
			where: { id: req.params.id }
		})
		.then(deletedYear => {
			return res.status(204).json(deletedYear).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request when the user tries to edit a specific term
exports.termsEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find term by ID, and pass task as JSON with status code 200 to client to render
		Terms.find({
      		where: { id: req.params.id}
		})
		.then(term => {
			return res.status(204).json(term).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.termsCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Terms.find({
			where: { id: req.params.id }
		})
		.then(term => {
			return res.status(200).json(term);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}	
	
// POST request after user SUBMITS the "New Term" form
exports.termsCreatePost = function(req, res) {
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
		Terms.create({
			title: req.body.title,
			start: req.body.start,
			end: req.body.end,
			rotation: req.body.rotation
		})
		.then(term => {
			return res.status(201).json(term).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after user SUBMITS the Term editer form
exports.termsUpdate = function(req, res, next) {
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
		Terms.find({
    		where: { id: req.params.id }
		})
		.then(Terms => {
        	return Terms.updateAttributes({
				title: req.body.title,
				year: req.body.year,
				start: req.body.start,
				end: req.body.end,
				rotation: req.body.rotation
			})
		})
		.then(updatedTerm => {
        	return res.status(204).json(updatedTerm).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// DELETE request after user DELETES the Term editer form
exports.termsDelete = function(req, res) {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Terms.destroy({
			where: { id: req.params.id }
		})
		.then(deletedTerm => {
			return res.status(204).json(deletedTerm).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request after user tries to edit a specific course
exports.coursesEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find term by ID, and pass task as JSON with status code 200 to client to render
		Courses.find({
      		where: { id: req.params.id}
		})
		.then(course => {
			return res.status(204).json(course).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.coursesCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Courses.find({
			where: { id: req.params.id}
	  })
	  .then(course => {
		  return res.status(204).json(course).redirect(301, "/"); // verify redirect status code during unit testing;	
	  })
	  .catch(() => {
		  return res.status(500).json({ errors: errors.array() });
	  });
	}
}
	
// POST request after user SUBMITS the "New Course" form 
exports.coursesCreatePost = function(req, res) {
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
		Courses.create({
			code: req.body.code,
			name: req.body.name,
			theme: req.body.theme
		})
		.then(course => {
			return res.status(201).json(course).redirect(301, ".."); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// PUT request after user SAVES the Course editer form
exports.coursesUpdate = function(req, res, next) {
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
		Courses.find({
      		where: { id: req.params.id }
		})
		.then(Courses => {
        	return Courses.updateAttributes({
				code: req.body.code,
				term: req.body.term,
				name: req.body.name,
				theme: req.body.theme
			})
		})
		.then(updatedCourse => {
        	return res.status(204).json(updatedCourse).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// DELETE request after user DELETES the Course editer Form
exports.coursesDelete = function(req, res) {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	} else {
		Courses.destroy({
			where: { id: req.params.id }
		})
		.then(deletedCourse => {
			return res.status(204).json(deletedCourse).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

// GET request after a user attempts to retrieve a specific module
exports.modulesEdit = function(req, res) {
	const errors = validationResult(req);
	
	// if errors array is NOT empty, render JSON error message
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		// else find term by ID, and pass task as JSON with status code 200 to client to render
		Modules.find({
      		where: { id: req.params.id}
		})
		.then(module => {
			return res.status(204).json(module).redirect(301, "/"); // verify redirect status code during unit testing;	
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}

exports.modulesCreateGet = function(req, res) {
	const errors = validationResult(req);
	
	if (!errors.isEmpty()) {
		return res.status(404).json({ errors: errors.array() });
	} else {
		Modules.find({
			where: { id: req.params.id }
		})
		.then(module => {
			return res.status(204).json(module);
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}	
	
// POST request after the user SUBMITS the "New Module" form
exports.modulesCreatePost = function(req, res) {
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
		Modules.create({
			type: req.body.type,
			course: req.body.course,
			start: req.body.start,
			end: req.body.end,
			instructor: req.body.instructor 
		})
		.then(module => {
			return res.status(201).json(module).redirect(301, "..");
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array()} );
		});
	}
}

// PUT request after the user SAVES the Modules editer form
exports.modulesUpdate = function(req, res, next) {
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
		Modules.find({
      		where: { id: req.params.id }
		})
		.then(Modules => {
        	return Modules.updateAttributes({
				type: req.body.type,
				course: req.body.course,
				start: req.body.start,
				end: req.body.end,
				instructor: req.body.instructor 
			})
		})
		.then(updatedModule => {
        	return res.status(204).json(updatedModule).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});  
	}
}

// DELETES request after the user DELETES the Modules editer form
exports.modulesDelete = function(req, res) {
	const errors = validationResult(req);
		
	if(!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	} else {
		Modules.destroy({
			where: { id: req.params.id }
		})
		.then(deletedModule => {
			return res.status(204).json(deletedModule).redirect(301, "/"); // verify redirect status code during unit testing;
		})
		.catch(() => {
			return res.status(500).json({ errors: errors.array() });
		});
	}
}