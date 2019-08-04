// import configurations
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models
const Users = require("./Users");

class Preferences extends Model{}
Preferences.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	},
	day: {
		type: Sequelize.STRING(8),
		allowNull: false
	},
	time: {
		type: Sequelize.STRING(20),
		allowNull: false
	},
	duration: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	calendar: {
		type: Sequelize.STRING(5),
		allowNull: false
	},
	emailList: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	}
}, { sequelize, modelName: "preferences"});

Preferences.belongsTo(Users, {as: "user"});

module.exports = Preferences;