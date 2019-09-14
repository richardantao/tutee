const async = require("async");

// import model
const Tasks = require("../models/Tasks");

// instantiate controller
const controller = [];

controller.index = (req, res) => {
	async.parallel({
		
	});
}

controller.tasksPast = (req, res) => {
	
}

// GET request for the Tasks editer form (single task by its ID)
controller.tasksEdit = (req, res) => {
	
}

controller.tasksCreateGet = (req, res) => {
	
}

// POST request after the user SUBMITS the "New Term" form
controller.tasksCreatePost = (req, res) => {
		
}

// PUT request after the user SAVES the Tasks editer form 
controller.tasksUpdate = (req, res, next) => {
	
}	

// DELETE request after the user DELETES the Tasks editer form
controller.tasksDelete = (req, res) => {
	
}

module.exports = controller;






