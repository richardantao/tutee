# Tutee

This repository holds all of Tutee's application dev files.

## Application Structure

**Node** and **React** control the bulk of the application. The app's frontend is written with React, and Node utilizes the Express framework to handle the app's server and API. MySQL is the database of choice, which is converted by Sequelize (ORM) in ```/server/models``` into Tutee's virtual object database.

The Node back-end is stuctured using MVC architecture, and the front-end organizes the React components using atomic design theory.

## Folder Structure

The application has the following directory structure:

+--`/client`  
|
|   +--`/public`  
|
|      +--`/assets`  
|
|         +--`/icons`  
|
|      +--`index.html`  
|
|   +--`/src` 
|
|      +--`/components` 
|
|         +--`/atoms`  
|
|         +--`/molecules`  
|
|         +--`/organisms`  
|
|         +--`/pages`  
|
|      +--`App.js`  
|
|      +--`App.css`  
|
|      +--`index.js` 
|
|      +--`package.json`  
+--`/server`
|  
|  +--`/controllers`  
|  
|  
   +--`/models`
|  
|   +--`/routes` 
|
|   +--`app.js`
|
|   +--`package.json`  

## Version Control
All releases on github mark the completion of a dev cycle, and signify a pass-over to the CI environment. Version controls at the

## Changelog

## v0.2.0 -

### Added
* `server/config`
* `server/migrations`
* `server/seeds`
* conditional configurations in `server/config/config.js`

* models
* controllers
* routers
* views

### Changed
* Moved `server/config.js` to `server/config/config.js`

* 

## v0.1.0 - 04-08-2019

### Added
* Project to Github
* .env files
* Version control
* Changelog to README.md
* Proxy for Node backend and React frontend

### Changed
* Moved configurations to .env files
