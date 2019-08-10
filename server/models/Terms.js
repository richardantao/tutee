// import Sequelize dependencies
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models
const Users = require("./Users");
const Years = require("./Years");
module.exports = () => {
	class Terms extends Model{}
	Terms.init({
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		},
		title: {
			type: Sequelize.STRING(50),
			allowNull: false
		},
		start: {
			type: Sequelize.DATE,
			allowNull: false
		},
		end: {
			type: Sequelize.DATE,
			allowNull: false
		},
		rotation: {
			type: Sequelize.STRING(50),
			allowNull: false
		}
	}, { sequelize, modelName: "Terms" });

	Terms.belongsTo(Users, {as: "Users"});
	Terms.belongsTo(Years, {as: "Years"});
}