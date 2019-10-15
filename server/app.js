const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
// const session = require("express-session");
const uuid = require("uuid");
// const cookieParser = require("cookie-parser");
// const dotenv = require("cdotenv").config();

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
app.use("/beta/:_id", require("./routes/beta.route"));
app.use("/users", require("./routes/users.route"));
app.use("/dashboard/:_id", require("./routes/dashboard.route"));
app.use("/calendar/:_id", require("./routes/calendar.route"));
app.use("/tasks/:_id", require("./routes/tasks.route"));
app.use("/evaluations/:_id", require("./routes/evaluations.route"));
app.use("/courses/:_id", require("./routes/courses.route"));
app.use("/search/:_id", require("./routes/search.route"));
app.use("/settings/:_id", require("./routes/settings.route"));
// app.use("/", require("./routes/email.route");

app.listen(port, () => {
	console.log(`Your ${env} server is up and running on port ` + port);
});

module.exports = app;