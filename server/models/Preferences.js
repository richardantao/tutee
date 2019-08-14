// import database
const database = require("../config/config");

// instantiate model
const Preferences = [];

Preferences.findById = req => {
	let userId = req.params.UserId;

	return database.query(
		`SELECT * FROM Preferences 
		WHERE UserId = ${userId}`
	);
}

Preferences.create = req => {
	let userId = req.params.UserId;
	let created = {
		preferenceDay: req.body.preferenceDay,
		preferenceTime: req.body.preferenceTime,
		preferenceDuration: req.body.preferenceDuration,
		preferenceCalendar: req.body.preferenceCalendar,
		preferenceEmailList: req.body.preferenceEmailList
	}

	return database.query(
		`INSERT INTO Preferences
		(UserId, PreferenceDay, PreferenceTime, PreferenceDuration, PreferenceCalendar, PreferenceEmailList)
		VALUES (${userId}, ${created.preferenceDay}, ${created.preferenceTime}, 
			${created.preferenceDuration}, ${created.preferenceCalendar}, ${created.preferenceEmailList})`
	);
}

Preferences.update = req => {
	let userId = req.params.UserId;
	let updated = {
		preferenceDay: req.body.preferenceDay,
		preferenceTime: req.body.preferenceTime,
		preferenceDuration: req.body.preferenceDuration,
		preferenceCalendar: req.body.preferenceCalendar,
		preferenceEmailList: req.body.preferenceEmailList
	}

	return database.query(
		`UPDATE Preferences
		SET
			PreferenceDay = ${updated.preferenceDay},
			PreferenceTime = ${updated.preferenceTime}
			PreferenceDuration = ${updated.preferenceDuration}
			PreferenceCalendar = ${updated.preferenceCalendar}
			PreferenceEmailList = ${updated.preferenceEmailList}
		WHERE UserId = ${userId}`
	);
}

// This query is invalid for the app
// Preferences.delete = () => {
// 	let userId = req.params.UserId;

// 	return database.query(
// 		`DELETE FROM Preferences
// 		WHERE UserId = ${userId}`
// 	);
// }

// export model
module.exports = Preferences;
