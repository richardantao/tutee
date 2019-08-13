const mysql = require("mysql");
const env = {
    env: process.env.NODE_ENV,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}

const database = mysql.createConnection({
  host: env.host,
  database: env.database,
  user: env.user,
  password: env.password,
});

database.connect(err => {
  if (err) {
        console.log("Connection error: " + err);
  } else {
        console.log(`Connection success: You are now connected to Tutee's ${env.env} database`);
  }
});

module.exports = database;