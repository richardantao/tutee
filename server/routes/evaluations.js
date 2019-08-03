const express = require("express");
const router = express.Router();
const controller = require("../controllers/evaluations");

// GET request for the Evaluations page
router.get("/", controller.index);

// handle route on frontend? maybe
router.get("/past", controller.evalsPast);

// GET request for specific evaluation
router.get("/:evalId/edit", controller.evalsEdit);

// GET user's data for the POST request
router.get("/:userId/create", controller.evalsCreateGet)

// POST request for creating a new evaluation
router.post("/create", controller.evalsCreatePost);

// PUT request for updating an existing evaluation
router.put("/:evalId/update", controller.evalsUpdate);

// DELETE request for deleting an existing evaluation
router.delete("/:evalId/delete", controller.evalsDelete);



router.get("/", function(req, res) {
 	let select = "SELECT * FROM Evals WHERE "
	
	connection.query(select, function(err, rows, fields) {
		if (err) {
			console.log("The query for evaluation items failed");
			res.sendStatus(500);
			throw err;
		} else {
			console.log("The query for evaluation items was successful");
			res.sendStatus(200);
			res.json(rows);
		}
		connection.end();
	});
});

router.post("/newEvaluation", function(req, res) {
	let insert = "INSERT INTO Evals(Eval_Title, Course_ID, Eval_Type, Eval_Location, Eval_Date, Eval_Time, Eval_Duration, Eval_Weighting, Eval_Score) VALUES ('" + req.body.evalTitle + "', '" + req.body.courseID + "', '" + req.body.evalType + "', '" + req.body.evalLocation + "', '" + req.body.evalDate + "', '" + req.body.evalTime + "', '" + req.body.evalDuration + "', '" + req.body.evalWeighting + "', '" + req.body.evalScore + "')";
	
	connection.query(insert, function(err, result, fields) {
		if(err) {
			console.log("New evaluation failed to insert data into the database");
			res.sendStatus(500);
			throw err;
		} else {
			console.log(result);
			res.sendStatus(200);
		}
		connection.end();	
	});
});

router.post("/deleteEvaluation/:Eval_ID", function(req, res) {
	const evalID = req.params.Eval_ID;
	let remove = "DELETE FROM Evals WHERE Eval_ID = " + evalID;
	
	connection.query(remove, function(err, result) {
		if (err) {
			console.log("The delete query failed");
			res.sendStatus(500);
			throw err;
		} else {
			res.sendStatus(200);
			console.log(result);
		}
		connection.end();
	});
});

module.exports = router;