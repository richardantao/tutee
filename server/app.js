/* Dependencies - import dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
// const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
// const dotenv = require('dotenv').config();

// const moment = require('moment');
// moment().format(); // move these two statements to respective files where date validation is required

/* Configurations */
const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "development";

/* Routes */
const users = require("./routes/users");
const dashboard = require("./routes/dashboard");
const calendar = require("./routes/calendar");
const tasks = require("./routes/tasks");
const evaluations = require("./routes/evaluations");
const courses = require("./routes/courses");
const search = require("./routes/search");
const settings = require("./routes/settings");
const email = require("./routes/email");

/* Middleware - preprocess requests */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
// app.use(session({secret: "shhh"}));

// routes middleware
app.use("/users/:UserId", users);
app.use("/dashboard/:UserId", dashboard);
app.use("/calendar/:UserId", calendar);
app.use("/tasks/:UserId", tasks);
app.use("/evaluations/:UserId", evaluations);
app.use("/courses/:UserId", courses);
app.use("/search/:UserId", search);
app.use("/settings/:UserId", settings);
app.use("/", email);

app.get("/", (req, res) => {

});

/* Bootup */
app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ` + port);
});

module.exports = app;