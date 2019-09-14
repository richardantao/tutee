const async = require("async");

// import models
const Classes = require("../models/Classes.model").default.default.default;
const Tasks = require("../models/Tasks.model");
const Evalus = require("../models/Evaluations.model");

// instantiate models
const controller = [];

// GET dashboard data
controller.index = (req, res) => {
	async.parallel({

	});
}

// GET display class editor for specific class
controller.dashboardClassEdit = (req, res) => {

};

controller.dashboardClassDelete = (req, res) => {

}


controller.dashboardTaskEdit = (req, res) => {

}

controller.dashboardTaskCreateGet = (req, res) => {

}

controller.dashboardTaskCreatePost = (req, res) => {


}

controller.dashboardTaskUpdate = (req, res) => {

}

controller.dashboardTaskDelete = (req, res) => {

}

controller.dashboardEvaluEdit = (req, res) => {

}

controller.dashboardEvaluUpdate = (req, res) => {

}

controller.dashboardEvaluDelete = (req, res) => {

}

module.exports = controller;