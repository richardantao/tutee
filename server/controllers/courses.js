// import dependencies
const Years = require("../models/Years");
const Terms = require("../models/Terms");
const Courses = require("../models/Courses");
const Modules = require("../models/Modules");

const async = require("async");

// instantiate controller
const controller = [];

// resolved .then()
controller.index = (req, res) => {
	async.parallel({

	});
}

// GET request when user tries to edit a specific year
controller.yearsEdit = (req, res) => {
	
};
	
// check to see if can combine with route above
controller.yearsCreateGet = (req, res) => {
	
}

// POST request after user SUBMITS the "New Academic Year" form
controller.yearsCreatePost = function(req, res) {

}

// PUT request after user SAVES the Year editer form
controller.yearsUpdate = (req, res, next) => {

}

// DELETE request after user DELETES the Year editor form
controller.yearsDelete = (req, res) => {

}

// GET request when the user tries to edit a specific term
controller.termsEdit = (req, res) => {

}

controller.termsCreateGet = (req, res) => {

}	
	
// POST request after user SUBMITS the "New Term" form
controller.termsCreatePost = (req, res) => {

}

// PUT request after user SUBMITS the Term editer form
controller.termsUpdate = (req, res, next) => {

}

// DELETE request after user DELETES the Term editer form
controller.termsDelete = (req, res) => {

}

// GET request after user tries to edit a specific course
controller.coursesEdit = (req, res) => {

}

controller.coursesCreateGet = (req, res) => {

}
	
// POST request after user SUBMITS the "New Course" form 
controller.coursesCreatePost = (req, res) => {

}

// PUT request after user SAVES the Course editer form
controller.coursesUpdate = (req, res) => {

}

// DELETE request after user DELETES the Course editer Form
controller.coursesDelete = (req, res) => {

}

// GET request after a user attempts to retrieve a specific module
controller.modulesEdit = (req, res) => {

}

controller.modulesCreateGet = (req, res) => {

}	
	
// POST request after the user SUBMITS the "New Module" form
controller.modulesCreatePost = (req, res) => {

}

// PUT request after the user SAVES the Modules editer form
controller.modulesUpdate = (req, res, next) => {

}

// DELETES request after the user DELETES the Modules editer form
controller.modulesDelete = (req, res) => {

}

module.exports = controller;