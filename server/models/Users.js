const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

class Users extends Model{}
Users.init({
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
		autoIncrement: true
	}, 
	firstName: {
		type: Sequelize.STRING(25),
		allowNull: false
	},
	lastName: {
		type: Sequelize.STRING(25),
		allowNull: false
	},
	password: {
		type: Sequelize.STRING(25),
		allowNull: false
	},
	passwordChange: {
		type: Sequelize.STRING(25)
	},
	email: {
		type: Sequelize.STRING(50),
		allowNull: false
	}, 
	country: {
		type: Sequelize.STRING(50)
	}, 
	region: {
		type: Sequelize.STRING(50)
	},
	institution: {
		type: Sequelize.STRING(100)		   
	}
}, { sequelize, modelName: "users" });

module.exports = Users;