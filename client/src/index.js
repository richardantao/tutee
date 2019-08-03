import React from "react";
import { render } from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const Index = () => {
	return (
		<App />
	)
};

render (
	<Router>
		<Index />
	</Router>,
	document.body
);