/* Dependencies - import dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();

const moment = require('moment');
moment().format(); // move these two statements to respective files where date validation is required

/* Configurations */
const app = express();
const port = process.env.PORT || 3001;
const database = require("./config/config");
const env = process.env.NODE_ENV || "development";

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

// test home page
app.get("/", (req, res) => {
	res.send("index page");
});

/* Bootup */
app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ${port}`);
});

module.exports = app;