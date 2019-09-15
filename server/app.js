/* Dependencies - import dependencies */
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
// const session = require("express-session");
const uuid = require("uuid");
const cookieParser = require("cookie-parser");
// const dotenv = require('dotenv').config();

/* Configurations */
const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "development";

/* Routes */
const users = require("./routes/users.route");
const dashboard = require("./routes/dashboard.route");
const calendar = require("./routes/calendar.route");
const tasks = require("./routes/tasks.route");
const evaluations = require("./routes/evaluations.route");
const courses = require("./routes/courses.route");
const search = require("./routes/search.route");
const settings = require("./routes/settings.route");
const email = require("./routes/email.route");

/* Middleware - preprocess requests */
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
app.use(cookieParser());
// app.use(session({secret: "shhh"}));

// routes middleware
app.use("/user", users);
app.use("/dashboard", dashboard);
app.use("/calendar", calendar);
app.use("/tasks", tasks);
app.use("/evaluations", evaluations);
app.use("/courses", courses);
app.use("/search", search);
app.use("/settings", settings);
app.use("/", email);

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ` + port);
});

module.exports = app;