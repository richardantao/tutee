const async = require("async");

// import model
const Evalus = require("../models/Evaluations.model")

// instantiate controller
const controller = [];


controller.index = (req, res) => {
	async.parallel({

	});
}

// filter evalus to get evalus with a past date
controller.evalusPast = (req, res) => {
	
}

// GET request when user attempts to retrieve a specific evaluation
controller.evalusEdit = (req, res) => {
	
};

controller.evalusCreateGet = (req, res) => {
	
}

// POST request after the user SUBMITS the "New Evaluation" form
controller.evalusCreatePost = (req, res) => {

}

// PUT request after the user SAVES the Evaluations editer form
controller.evalusUpdate = (req, res, next) => {

}	

// DELETE request after the user DELETES the Evaluations editer form
controller.evalusDelete = (req, res) => {

}

module.exports = controller;