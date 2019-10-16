# Tutee
This branch holds all of Tutee's development files. This branch is for development and testing prior to integrating branches with `staging`.

## Application Structure

### Frontend 
The frontend is built with React, which is hosted inside the `app/` folder. The `components/` are organized using atomic design, which are broken down into atoms, molecules, organisms, and pages.

Redux is implemented into the frontend as a state manager in `store.js`, and cycled through the `actions/` and `reducers/` folders.

The `public/` folder holds all the static files that are accessible to the public prior to user authentication and the application. These pages are on the root domain, `tutee.ca`.

### Backend
The backend is built with Node, which is hosted inside the `server/` folder. The MVC architecture is generally used to organize the backend, with the `models/`, `controllers/`, and `routes/` containing the major files.

***Note***: `public/` is a substitute to the standard `views/` folder that is typically used in backend MVC systems to generate the views. In production, the frontend and backend are connected, and the views are controlled by the React frontend.

## Scripts

From `tutee/`

`npm run dev` - runs the react app and node server concurrently, using a proxy between ports 3000 and 3001, respectively.

## Website Structure
This section details the breakdown of the subdomains, and how the entire website is organized.

### tutee.ca
The root domain is held in `app/public/`, and contains all the static pages that are accessible to all users.

### app.tutee.ca
This subdomain hosts the application, and is only accessible to registered/authenticated users.

### beta.tutee.ca
This subdomain is the beta version of the application. This service is to always be one step ahead of `app.tutee.ca` and will test new features with the users within the beta grop. This service is only accessible to users who are registerd beta testers.

### blog.tutee.ca
This subdomain is accessed through `blog.html` on the root domain. This subdomain is accessible to everyone, and holds all of Tutee's blog posts.

### careers.tutee.ca
The careers portal for interested applicants to apply for open positions. This subdomain is to be amalgamated with `team.tutee.ca` in a later version.

### docs.tutee.ca
This subdomain hosts all supporting documents for Tutee, including but not limited to Terms of Service, What is Tutee, and the Changelog.

### team.tutee.ca
This subdomain is a future application specifically for the Tutee team. This subdomain will host the interface for team planning, KPIs, and general communication.

