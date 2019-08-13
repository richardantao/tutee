module.exports = (models, Sequelize) => {
	const Years = models.define("Years", {
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
	}, {});

	Years.associate = (models) => {
		Years.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
	}
	
	return Years;
}
