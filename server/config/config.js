const Sequelize = require("sequelize");
const name = process.env.DB_NAME; 
const user = process.env.DB_USER; 
const password = process.env.DB_PASSWORD; 
const host = process.env.DB_HOST; 


const sequelize = new Sequelize(name, user, password, {
	host: host,
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