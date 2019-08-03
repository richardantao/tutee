// import Sequelize dependencies
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models
const Users = require("./Users");
const Modules = require("./Modules");

class Classes extends Model {}
Classes.init({
	
}, { sequelize, modelName: "classes" });

Classes.belongsTo(Users, {as: "user"});
Classes.belongsTo(Modules, {as: "module"});

module.exports = Classes;