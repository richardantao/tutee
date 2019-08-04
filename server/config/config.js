const Sequelize = require("sequelize");
const env = process.env.NODE_ENV;
const db = {
  name: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST
}

const sequelize = new Sequelize(db.name, db.user, db.password, {
	host: db.host,
	dialect: "mysql"
});

sequelize.authenticate().then(function() {
    console.log(`The Sequelize connection to the ${env} database has successfully authenticated`);
  }).catch(function(err) {
    console.error('Unable to connect to the database:', err);
  });

const config = {
  sequelize: sequelize,
  Sequelize: Sequelize
};

module.exports = config;