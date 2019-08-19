import React from "react";
import { render } from "react-dom";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Dashboard from "./components/pages/Dashboard";
import Calendar from "./components/pages/Calendar";
import Tasks from "./components/pages/Tasks";
import Evaluations from "./components/pages/Evaluations";
import Courses from "./components/pages/Courses";
import Settings from "./components/pages/Settings";
import NotFound from "./components/pages/NotFound";


const Index = () => {
	return (
		<App />
	)
};

render (
	<Router>
		<Index />
	</Router>,
	document.querySelector("#app")
);