module.exports = (models, Sequelize) => {
    const Sessions = models.define("Sessions", {
        
    }, {});

    Sessions.associate = (models) => {
        Sessions.belongsTo(models.Users, {
            foreignKey: "userId",
            as: "user"
        });
        Sessions.belongsTo(models.Modules, {
            foreignKey: "moduleId",
            as: "module"
        });
    }

    return Sessions;
}
