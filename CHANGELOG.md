## Future feature list 
* Apple watch integration
* Autofill fields

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
* Promisified database queries
* User Settings
* test folder for mochag
* Static front-end prior to authentication

### Changed
* Moved `server/config.js` to `server/config/config.js`
* Moved index routes and view renders from `server/controllers` to `client/components/organisms/{data}Column` 
* `Evals` to `Evalus` and `Classes` to `Sessions` to avoid confusion with JS keywords
* Rewrote models and controllers with native MySQL queries
* `.css` to `.scss`


### Fixed 
* `models/` configurations to the database 
* 

### Removed
* Folder stucture in `README.md` 
* Sequelize, and all Sequelize related code and dependencies

## v0.1.0 - 04-08-2019

### Added
* Project to Github
* .env files
* Version control
* Changelog to README.md
* Proxy for Node backend and React frontend

### Changed
* Moved configurations to .env files