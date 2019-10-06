const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
// const session = require("express-session");
const uuid = require("uuid");
// const cookieParser = require("cookie-parser");
// const dotenv = require('dotenv').config();

// Configurations
const app = express();
const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || "development";
const db = require("./config/config");

// Middleware - preprocessing 
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use(cors());
// app.use(cookieParser());
// app.use(session({secret: "shhh"}));

// Routes middleware
app.use("/", require("./routes/sessions.route"));
app.use("/beta", require("./routes/beta.route"));
app.use("/user", require("./routes/users.route"));
app.use("/dashboard", require("./routes/dashboard.route"));
app.use("/calendar", require("./routes/calendar.route"));
app.use("/tasks", require("./routes/tasks.route"));
app.use("/evaluations", require("./routes/evaluations.route"));
app.use("/courses", require("./routes/courses.route"));
app.use("/search", require("./routes/search.route"));
app.use("/settings", require("./routes/settings.route"));
// app.use("/", require("./routes/email.route");

// Test route
app.get("/", (req, res) => {
	res.send("Hello World");
});

// Bootup 
app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ` + port);
});

module.exports = app;