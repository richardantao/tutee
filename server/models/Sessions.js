// import Sequelize dependencies
const config = require("../config/config");
const sequelize = config.sequelize;
const Sequelize = config.Sequelize;
const Model = Sequelize.Model;

// import related models
const Users = require("./Users");
const Modules = require("./Modules");

module.exports = () => {
    class Sessions extends Model {}
    Sessions.init({
        
    }, { sequelize, modelName: "Sessions" });

    Sessions.belongsTo(Users, {as: "user"});
    Sessions.belongsTo(Modules, {as: "module"});
}
