const Sequelize = require("sequelize");

const sequelize = new Sequelize("tutee", "root", "realpimp69!", {
	host: "localhost",
	dialect: "mysql"
});

sequelize.authenticate().then(function() {
    console.log('The Sequelize connection has been established successfully.');
  }).catch(function(err) {
    console.error('Unable to connect to the database:', err);
  });

const config = {
  sequelize: sequelize,
  Sequelize: Sequelize
};

module.exports = config;