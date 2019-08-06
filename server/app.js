"use strict";

/* Dependencies - import dependencies */
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();

const moment = require('moment');
moment().format(); // move these two statements to respective files where date validation is required

/* create app instance and define env variables */
const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV;
const db = {
	name: process.env.DB_NAME,
  	user: process.env.DB_USER,
  	password: process.env.DB_PASSWORD,
  	host: process.env.DB_HOST
}

const config = require("./config/config");

const connection = mysql.createConnection({
		host: db.host,
		user: db.user,
		password: db.password,
		database: db.name
	});

connection.connect(function(err) {
	if (err) {
		console.log("Your connection to the database failed");
		throw err;
	} else {
		console.log(`Your connection to the ${env} database was successful`)
	}
});

//// import routes
const indexRouter = require("./routes/index");
const usersRouter= require("./routes/users");
const dashboardRouter= require("./routes/dashboard");
const calendarRouter= require("./routes/calendar");
const tasksRouter= require("./routes/tasks");
const evaluationsRouter= require("./routes/evaluations");
// const coursesRouter= require("./routes/courses");
const searchRouter= require("./routes/search");
const settingsRouter= require("./routes/settings");

/* Configuration - configure system and custom settings */ 

/* Middleware - preprocess requests */
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

// routes middleware
app.use("", indexRouter);
app.use("/users", usersRouter);
app.use("/dashboard", dashboardRouter);
app.use("/calendar", calendarRouter);
app.use("/tasks", tasksRouter);
app.use("/evaluations", evaluationsRouter);
// app.use("/courses", coursesRouter);
app.use("/search", searchRouter);
app.use("/settings", settingsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  	// set locals, only providing error in development
  	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

  	// render the error page
  	res.status(err.status || 500);
  	res.render("error");
});

// view engine | use template to render initial html s
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname + "/../client/public/index.html"));
});

/* Bootup */
app.listen(port, function() {
	console.log(`Your ${env} server is up and running on port ${port}`);
});

module.exports = app;