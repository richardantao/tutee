# Tutee
This branch holds all of Tutee's development files. This branch is for development and testing prior to integrating branches with `staging`.

## Application Structure

### Frontend 
The frontend is built with React, which is hosted inside the `app/` folder. The `components/` are organized using atomic design, which are broken down into atoms, molecules, organisms, and pages.

Redux is implemented into the frontend as a state manager in `store.js`, and the `actions/` and `reducers/` folders.

### Backend
The backend is built with Node, which is hosted inside the `server/` folder. The MVC architecture is generally used to organize the backend, with the `models/`, `controllers/`, and `routes/` containing the major files.

***Note***: `public/` is a substitute to the standard `views/` folder that is typically used in backend MVC systems to generate the views. In production, the frontend and backend are connected, and the views are controlled by the React frontend.

## Scripts

From `tutee/`

`npm run dev` - runs the react app and node server concurrently, using a proxy between ports 3000 and 3001, respectively.


