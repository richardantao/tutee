CREATE TABLE `Users` (
	`UserId` INT NOT NULL AUTO_INCREMENT,
	`UserIsBeta` BOOLEAN NOT NULL DEFAULT 0,
  	`UserFirstName` VARCHAR(25) NOT NULL,
  	`UserLastName` VARCHAR(25) NOT NULL,
  	`UserPassword` VARCHAR(25) NOT NULL,
  	`UserPasswordChange` VARCHAR(25),
  	`UserEmail` VARCHAR(50) NOT NULL,
	`UserCountry` VARCHAR(50),
	`UserRegion` VARCHAR(50),
  	`UserInstitution` VARCHAR(100),
	`UserCreated` DATETIME NOT NULL,
 	`UserModified` DATETIME NOT NULL,
	`UserLastLogin` DATETIME NOT NULL,
  	PRIMARY KEY (`UserId`)
);

CREATE TABLE `Years` (
	`YearId` INT NOT NULL AUTO_INCREMENT,
  	`UserId` INT NOT NULL,
  	`YearTitle` VARCHAR(40) NOT NULL,
  	`YearStart` DATE NOT NULL,
  	`YearEnd` DATE NOT NULL,
	`YearCreated` DATETIME NOT NULL,
 	`YearModified` DATETIME NOT NULL,
  	PRIMARY KEY (`YearId`),
  	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`)
);

CREATE TABLE `Terms` (
	`TermId` INT NOT NULL AUTO_INCREMENT,
	`UserId` INT NOT NULL,
  	`YearId` INT NOT NULL,
	`TermTitle` VARCHAR(40) NOT NULL,
  	`TermStart` DATE NOT NULL,
  	`TermEnd` DATE NOT NULL,
  	`TermRotation` VARCHAR(50) NOT NULL,
	`TermCreated` DATETIME NOT NULL,
 	`TermModified` DATETIME NOT NULL,
  	PRIMARY KEY (`TermId`),
	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`),
  	FOREIGN KEY (`YearId`) REFERENCES Years(`YearId`)
);

CREATE TABLE `Courses` (
	`CourseId` INT NOT NULL AUTO_INCREMENT,
	`UserId` INT NOT NULL,
	`TermId` INT NOT NULL,
	`CourseCode` VARCHAR(20) NOT NULL,
	`CourseName` VARCHAR(75) NOT NULL,
	`CourseTheme` VARCHAR(20) NOT NULL,
	`CourseCreated` DATETIME NOT NULL,
 	`CourseModified` DATETIME NOT NULL,
	PRIMARY KEY (`CourseId`),
	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`),
	FOREIGN KEY (`TermId`) REFERENCES Terms(`TermId`)
);

CREATE TABLE `Modules` (
  	`ModuleId` INT NOT NULL AUTO_INCREMENT,
	`UserId` INT NOT NULL,
  	`CourseId` INT NOT NULL,
	`ModuleType` VARCHAR(20) NOT NULL,
  	`ModuleStart` DATE NOT NULL,
  	`ModuleEnd` DATE NOT NULL,
  	`ModuleInstructor` VARCHAR(40),
	`ModuleCreated` DATETIME NOT NULL,
 	`MoudleModified` DATETIME NOT NULL,
  	PRIMARY KEY (`ModuleId`),
	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`),
  	FOREIGN KEY (`CourseId`) REFERENCES Courses(`CourseId`)
);

CREATE TABLE `Tasks` (
  	`TaskId` INT AUTO_INCREMENT,
	`UserId` INT NOT NULL,
  	`ModuleId` INT NOT NULL,
	`TaskTitle` VARCHAR(50) NOT NULL,
  	`TaskType` VARCHAR(30) NOT NULL,
  	`TaskDeadline` DATE NOT NULL,
  	`TaskCompletion` DECIMAL,
  	`TaskNote` VARCHAR(2000),
	`TaskCreated` DATETIME NOT NULL,
 	`TaskModified` DATETIME NOT NULL,
  	PRIMARY KEY (`TaskId`),
	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`),
  	FOREIGN KEY (`ModuleId`) REFERENCES Modules(`ModuleId`)
);

CREATE TABLE `Evals` (
  	`EvalId` INT AUTO_INCREMENT,
	`UserId` INT NOT NULL,
  	`CourseId` INT NOT NULL,
	`EvalTitle` VARCHAR(50) NOT NULL,
  	`EvalType` VARCHAR(20) NOT NULL,
  	`EvalLocation` VARCHAR(50),
  	`EvalDate` DATE NOT NULL,
  	`EvalTime` TIME NOT NULL,
  	`EvalDuration` SMALLINT NOT NULL,
  	`EvalWeighting` DECIMAL,
  	`EvalScore` DECIMAL,
	`EvalCreated` DATETIME NOT NULL,
 	`EvalModified` DATETIME NOT NULL,
  	PRIMARY KEY (`EvalId`),
	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`),
  	FOREIGN KEY (`CourseId`) REFERENCES Courses(`CourseId`)
);

CREATE TABLE `Preferences` (
  	`PreferenceId` INT NOT NULL AUTO_INCREMENT, 
  	`UserId` INT NOT NULL,
  	`PreferenceDay` VARCHAR(8) NOT NULL,
  	`PreferenceTime` TIME NOT NULL,
  	`PreferenceDuration` SMALLINT NOT NULL,
  	`PreferenceCalendar` VARCHAR(5) NOT NULL,
  	`PreferenceEmailList` BOOLEAN,
  	PRIMARY KEY (`PreferenceId`),
  	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`)
);

/* Post-Beta Implementation */
CREATE TABLE `Extracurs` (
	`ExtracurId` INT NOT NULL AUTO_INCREMENT,
  	`UserId` INT NOT NULL,
  	`ExtracurType` VARCHAR(50) NOT NULL,
  	`ExtracurStart` DATE NOT NULL,
  	`ExtracurEnd` DATE NOT NULL,
  	PRIMARY KEY (`ExtracurId`),
  	FOREIGN KEY (`UserId`) REFERENCES Users(`UserId`)
);

/* Post-Beta Implementation */
CREATE TABLE `Classes` (
	`ClassId` INT NOT NULL AUTO_INCREMENT,
  	`ClassID` INT NOT NULL,
  	`ClassStartTime` TIME NOT NULL,
  	`ClassEndTime` TIME NOT NULL,
  	`ClassDayMon` BOOLEAN,
  	`ClassDayTue` BOOLEAN,
	`ClassDayWed` BOOLEAN,
  	`ClassDayThu` BOOLEAN,
  	`ClassDayFri` BOOLEAN,
  	`ClassDaySat` BOOLEAN,
  	`ClassDaySun` BOOLEAN,
  	`ClassLocation` VARCHAR(50),
  	`ClassRepeat` DATE,
  	PRIMARY KEY (`ClassdId`),
  	FOREIGN KEY (`ModuleId`) REFERENCES Modules(`ModuleId`)
);

/* Post-Beta Implementation */
CREATE TABLE `Planner` (
  	`PlannerId` INT NOT NULL AUTO_INCREMENT,
  	`TermId` INT NOT NULL,
  	`PlannerDate` DATE,
  	`PlannerNote` TEXT,
  	PRIMARY KEY (`PlannerId`),
  	FOREIGN KEY (`TermId`) REFERENCES Terms(`TermId`)
);

						 


