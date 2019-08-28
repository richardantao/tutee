/* Dependencies - import dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const session = require("express-session");
// const path = require("path");
const cookieParser = require("cookie-parser");
// const dotenv = require('dotenv').config();

// const moment = require('moment');
// moment().format(); // move these two statements to respective files where date validation is required

/* Configurations */
const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "development";

/* Middleware - preprocess requests */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
app.use(session({secret: "shhh"}));

// routes middleware
app.use("/users/:UserId", require("./routes/users"));
app.use("/dashboard/:UserId", require("./routes/dashboard"));
app.use("/calendar/:UserId", require("./routes/calendar"));
app.use("/tasks/:UserId", require("./routes/tasks"));
app.use("/evaluations/:UserId", require("./routes/evaluations"));
app.use("/courses/:UserId", require("./routes/courses"));
app.use("/search/:UserId", require("./routes/search"));
app.use("/settings/:UserId", require("./routes/settings"));
app.use("/", require("./routes/email"));

// test home page
app.get("/", (req, res) => {
	res.send("index page");
});

/* Bootup */
app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ` + port);
});

module.exports = app;