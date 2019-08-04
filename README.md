# Tutee

This repository holds all of Tutee's application files.

## Application Structure

**Node** and **React** control the bulk of the application. The app's frontend is written with React, and Node utilizes the Express framework to handle the app's server and API. MySQL is the database of choice, which is converted by Sequelize (ORM) in ```/server/models``` into Tutee's virtual object database.

The Node back-end is stuctured using MVC architecture, and the front-end organizes the React components using atomic design theory.

## Folder Structure

The application has the following directory structure:

|-`/client`  

|--`/public`  

|---`/assets`  

|----`/icons`  

|---`index.html`  

|--`/src` 

|---`/components` 

|----`/atoms`  

|----`/molecules`  

|----`/organisms`  

|----`/pages`  

|---`App.js`  

|---`App.css`  

|---`index.js` 

|--`package.json`  

|-`/server`

|--`/controllers`

|--`/models`

|--`/routes` 

|--`app.js`

|--`package.json`  

## Changelog

## v0.1.0

Initial Features

### Dashboard 
* User can view all classes for the day
* All tasks within the upcoming week are displayed
* All evaluations within the upcoming 10 days are displayed

### Tasks
*
*
*

### Evaluations
*

### Courses
*

### Settings
*