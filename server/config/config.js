const MongoClient = require("mongodb").MongoClient;
const url = "mongo://localhost:27017/TuteeDev";

MongoClient.connect(url, (err, db) => {
  if (err) {
    throw err;
  } else {
    console.log("");

    db.close();
  }
});