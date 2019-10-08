const moment = require("moment");

// import model
const Evals = require("../models/Evaluations.model")

const controller = [];

controller.index = (req, res) => {
	Evals.find({
		id: req.params.id, // user id
		date: {
			$gte: moment().startOf("date").format("MMMM Do YYYY")
		}
	})
	.then(evals => {
		return res.json(evals);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while retrieving your evaluations"
		});
	});
}

controller.past = (req, res) => {
	Evals.find({
		id: req.params.id, // user id
		date: {
			$lt: moment().startOf("date").format("MMMM Do YYYY")
		}
	})
	.then(pastEvaluations => {
		if(!pastEvaluations) {
			return res.status(404).json({
				message: "The server was unable to successfully find your past evaluations"
			});
		} else {
			return res.json(pastEvaluations);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The server was unable to successfully find your past evaluations"
			});
		} else {
			return res.status(505).json({
				message: err.message || "An error occured while retrieving your past evaluations"
			});
		}
	});
}

controller.edit = (req, res) => {
	Evals.findById(req.params.id)
	.then(selectedEval => {
		if(!selectedEval) {
			return res.status(404).json({
				message: "The evaluation you selected was not successfully found"
			});
		} else {
			return res.json(selectedEval);
		}
	})
	.catch(err => {
		if(err.kind === 'ObjectId') {
			return res.status(404).json({
				message: "The evaluation you selected was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while retrieving this evaluation"
			});
		}
	});
};

controller.createGet = (req, res) => {
	
}

controller.createPost = (req, res) => {
	const eval = new Evals({
		parents: {
			user: {
				id: req.body.userId,
				name: {
					first: req.body.fname,
					last: req.body.lname
				}
			},
			course: {
				id: req.body.courseId,
				title: req.body.courseTitle
			}
		},
		title: req.body.title,
		type: req.body.type,
	  	date: req.body.date,
		time: req.body.time,
		duration: req.body.duration,
		meta: {
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	});

	eval.save()
	.then(newEval => {
		res.json(newEval);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while creating this evaluation"
		})
	});
}

controller.update = (req, res) => {
	Evals.findByIdAndUpdate(req.params.id, {
		$set: {
			title: req.body.title,
			type: req.body.type,
			location: req.body.location,
			date: req.body.date,
			time: req.body.time,
			duration: req.body.duration,
			grade: {
				weighting: req.body.weighting,
				score: req.body.score
			},
			meta: {
				updatedAt: Date.now()
			}
		}
	})
	.then(updatedEval => {
		if(!updatedEval) {
			return res.status(404).json({
				message: "The evaluation you selected was not successfully found"
			});
		} else {
			return res.json(updatedEval);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId") {
			return res.status(404).json({
				message: "The evaluation you selected was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while trying to update this evaluation"
			});
		}
	});
}	

controller.delete = (req, res) => {
	Evals.findByIdAndDelete(req.params.id)
	.then(deletedEval => {
		if(!deletedEval) {
			return res.status(404).json({
				message: "The evaluation you are attempting to delete was not successfully found"
			});
		} else {
			return res.json(deletedEval);
		}
	})
	.catch(err => {
		if(err.kind === "ObjectId" || err.name === "NotFound") {
			return res.status(404).json({
				message: "The evaluation you are attempting to delete was not successfully found"
			});
		} else {
			return res.status(500).json({
				message: err.message || "An error occured while deleting this evaluation"
			});
		}
	});
}

module.exports = controller;