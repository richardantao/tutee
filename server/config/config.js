const client = require("mongodb").MongoClient;
const url = "mongo://localhost:27017/TuteeDev";

async function asyncFunction() {
  await client.connect(url, (err, db) => {
    if (err) { 
      console.log(err);
    } else {
      console.log("Connected successfully to the database");
      db.close();
    }
  });

  const session = client.startSession({defaultTransactionOptions: {
    readConcern: { level: 'local' },
    writeConcern: { w: 'majority' },
    readPreference: 'primary'
  }});
}

asyncFunction();

module.exports = client;
