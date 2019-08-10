/* Dependencies - import dependencies */
const express = require("express");
// const mysql = require("mysql");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
// const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();

const moment = require('moment');
moment().format(); // move these two statements to respective files where date validation is required

/* create app instance and define env variables */
const app = express();
const port = process.env.PORT || 3001;

const env = process.env.NODE_ENV;
// const db = {
// 	name: process.env.DB_NAME,
//   	user: process.env.DB_USER,
//   	password: process.env.DB_PASSWORD,
//   	host: process.env.DB_HOST
// }

// Configurations
const config = require("./config/config");

// const connection = mysql.createConnection({
// 		host: db.host,
// 		user: db.user,
// 		password: db.password,
// 		database: db.name
// 	});

// connection.connect(err => {
// 	if (err) {
// 		console.log("Your connection to the database failed");
// 		throw err;
// 	} else {
// 		console.log(`Your connection to the ${env} database was successful`)
// 	}
// });

/* Middleware - preprocess requests */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());

// routes middleware
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/calendar", require("./routes/calendar"));
app.use("/tasks", require("./routes/tasks"));
app.use("/evaluations", require("./routes/evaluations"));
app.use("/courses", require("./routes/courses"));
app.use("/search", require("./routes/search"));
app.use("/settings", require("./routes/settings"));

// server side render, view engine 
app.get("/", (req, res) => {
	res.send("index page");
});

/* Bootup */
app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ${port}`);
});

module.exports = app;