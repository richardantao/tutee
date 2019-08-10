const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;

const development = {
  user: "",
  password: "",
  database: "",
  host: "",
  dialect: "mysql"
}

const testing = {
  user: "",
  password: "",
  database: "",
  host: "",
  dialect: "mysql"
}

const production = {
  user: "",
  password: "",
  database: "",
  host: "",
  dialect: "mysql"
} 

const db = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  url: process.env.DB_URL
}

if (env === "production") {
  var sequelize = new Sequelize(url, {});
} else if (env === "testing") {
  var sequelize = new Sequelize(); // define testing database location
} else {
  var sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: "mysql",

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  sequelize.authenticate().then(function() {
      console.log(`The Sequelize connection to the ${env} database has successfully authenticated`);
    }).catch(function(err) {
      console.error('Unable to connect to the database:', err);
    });

  var config = {
    sequelize: sequelize,
    Sequelize: Sequelize
  };
}

module.exports = config;