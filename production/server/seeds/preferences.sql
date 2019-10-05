ALTER TABLE Terms
ALTER Term_Rotation SET DEFAULT 'Weekly';
						 

ALTER TABLE Preferences
ALTER Preference_Time SET DEFAULT '08:30:00';

ALTER TABLE Preferences
ALTER Preference_Day SET DEFAULT 'Monday';

ALTER TABLE Preferences
ALTER Preference_Duration SET DEFAULT 50;

ALTER TABLE Preferences
ALTER Preference_Calendar SET DEFAULT "Week";

ALTER TABLE Preferences
ALTER Preference_EmailList SET DEFAULT 1;