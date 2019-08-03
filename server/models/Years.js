// import Sequelize dependencies
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related model
const Users = require("./Users");

class Years extends Model{}
Years.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	title: {
		type: Sequelize.STRING(40),
		allowNull: false
	},
	start: {
		type: Sequelize.DATE,
		allowNull: false
	},
	end: {
		type: Sequelize.DATE,
		allowNull: false
	}
}, { sequelize, modelName: "Years"});

Years.belongsTo(Users, {as: "Users"});

module.exports = Years;