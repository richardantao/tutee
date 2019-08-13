module.exports = (models, Sequelize) => {
	const Preferences = models.define("Modules", {
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
	}, {})

	Preferences.associate = (models) => {
		Preferences.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
	}
	return Preferences;
}
