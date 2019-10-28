import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth/auth.action";

import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Calendar from "./components/pages/Calendar";
import Tasks from "./components/pages/Tasks";
import Evaluations from "./components/pages/Evaluations";
import Courses from "./components/pages/Courses";
import Search from "./components/pages/Search";
import Settings from "./components/pages/Settings";
import Help from "./components/pages/Help";
import Errors from "./components/pages/Errors";

import "./App";
import './App.scss';

export default class App extends Component {
	componentDidMount() {
		store.dispatch(loadUser());
	};

	render() {
		return (
			<Provider store={store}>
				<Switch>
					<Route name="register" path="/register" component={Register}/>
					<Route name="login" path="/signin" component={Login}/>
					<Route name="dashboard" path="/dashboard" component={Dashboard}/>
					<Route name="calendar" path="/calendar" component={Calendar}/>
					<Route name="tasks" path="/tasks" component={Tasks}/>
					<Route name="evaluations" path="/evaluations" component={Evaluations}/>
					<Route name="courses" path="/courses" component={Courses}/>
					<Route name="search" path="/search" component={Search}/>
					<Route name="settings" path="/settings" component={Settings}/>
					<Route name="help" path="/help" component={Help}/>
					<Route name="errors" path="/errors" component={Errors}/>
				</Switch>
			</Provider>
		);
	};
};
