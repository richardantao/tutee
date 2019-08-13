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

database.connect(function(err) {
  if (err) {
        throw err;
  } else {
        console.log(`Connected to Tutee's ${env.env} database`);
  }
});

module.exports = database;