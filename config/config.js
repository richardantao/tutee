const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const mongoDB = "mongodb://localhost/TuteeDev";

mongoose.connect(mongoDB, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() =>  {
  console.log("Sucessfully connected to mongo!");
})
.catch(err => {
  console.error(err);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Your connection with the database has been established");
});

module.exports = db;