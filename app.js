const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
// const dotenv = require("dotenv").config();

/* NOTE
	add googleapis and @google-cloud/storage to production package.json
 */

// Configurations
const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "development";
const db = require("./config/config");

// Middleware - preprocessing 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use("/", require("./routes/auth.route"));
app.use("/beta/:userId", require("./routes/beta.route"));
app.use("/users", require("./routes/users.route"));
app.use("/dashboard/:userId", require("./routes/dashboard.route"));
app.use("/calendar/:userId", require("./routes/calendar.route"));
app.use("/tasks/:userId", require("./routes/tasks.route"));
app.use("/evaluations/:userId", require("./routes/evaluations.route"));
app.use("/courses/:userId", require("./routes/courses.route"));
app.use("/search/:userId", require("./routes/search.route"));
app.use("/settings/:userId", require("./routes/settings.route"));

// Conditional environment routing
if(env === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "public", "index.html"));
	});
} else {
	app.use(express.static("public"));
	app.use(logger("dev"));
}

// Bootup
app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ${port}`);
});

module.exports = app;