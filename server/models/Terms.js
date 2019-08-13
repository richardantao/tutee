module.exports = (models, Sequelize) => {
	const Terms = models.define("Terms", {
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
	}, {});

	Terms.associate = (models) => {
		Terms.belongsTo(models.Users, {
			foreignKey: "userId",
			as: "user"
		});
		Terms.belongsTo(models.Years, {
			foreignKey: "yearId",
			as: "year"
		});
	}

	return Terms;
}