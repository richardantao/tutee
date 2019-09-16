// import model
const Evals = require("../models/Evaluations.model")

// instantiate controller
const controller = [];

controller.index = (req, res) => {
	Evals.find()
	.then(evals => {
		return res.json(evals);
	})
	.catch(err => {
		return res.status(500).json({
			message: err.message || "An error occured while retrieving your evaluations"
		});
	});
}

// filter evalus to get evalus with a past date
controller.past = (req, res) => {
	
}

// GET request when user attempts to retrieve a specific evaluation
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

// POST request after the user SUBMITS the "New Evaluation" form
controller.createPost = (req, res) => {
	const eval = new Evals({
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

// PUT request after the user SAVES the Evaluations editer form
controller.update = (req, res) => {
	// selective update
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