# Tutee

This repository holds all of Tutee's application dev files.

## Application Structure

**Node** and **React** control the bulk of the application. The app's frontend is written with React, and Node utilizes the Express framework to handle the app's server and API. MySQL is the database of choice, which is converted by Sequelize (ORM) in ```/server/models``` into Tutee's virtual object database.

The Node back-end is stuctured using MVC architecture, and the front-end organizes the React components using atomic design theory.

## Version Control
All releases on github mark the completion of a dev cycle, and signify a pass-over to the CI repo.

## Changelog

## v0.4.0 - Unreleased

### Added
* Cached sessions to improve app performance
* Cookies

## v0.3.0 - Unreleased 

### Added
* App's splash page `client/public/splash.html`
* User authentification
* Email verification

### Changed

### Deprecated

### Fixed

### Removed

## v0.2.0 - Unreleased

### Added
* `server/config`
* `server/migrations`
* `server/seeds`
* Conditional configurations in `server/config/config.js`
* SSR with initial page loadup, and CSR after first load

### Changed
* Moved `server/config.js` to `server/config/config.js`
* Moved index routes and view renders from `server/controllers` to `client/components/organisms/{data}Column` 
* `Evals` to `Evalus` and `Classes` to `Sessions` to avoid confusion with JS keywords

### Fixed 
* `models/` configurations to the database 
* 

### Removed
* Folder stucture in `README.md` 

## v0.1.0 - 04-08-2019

### Added
* Project to Github
* .env files
* Version control
* Changelog to README.md
* Proxy for Node backend and React frontend

### Changed
* Moved configurations to .env files
