// import database client
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/mydb";

// import environment variables
const env = {
  env: process.env.NODE_ENV,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD
}

db.createCollection('test', (err, collection) => {
  
});



MongoClient.connect(url, (err, db) => {
  if (err) {
   throw err; 
  }
  else {
    const database = db.db("TuteeDB");
    database.createCollection("test", err => {
      if (err) {
        throw err;
      } else {
        console.log("Collection created!");
        db.close();
      }
    });
  }
});
