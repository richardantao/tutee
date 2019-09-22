import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import './App.scss';
import "./App";

import Dashboard from "./components/pages/Dashboard";
import Calendar from "./components/pages/Calendar";
import Tasks from "./components/pages/Tasks";
import Evaluations from "./components/pages/Evaluations";
import Courses from "./components/pages/Courses";
import Search from "./components/pages/Search";
import Settings from "./components/pages/Settings";
	import Profile from "./components/organisms/Profile";
	import Password from "./components/organisms/Password";
	import Preference from "./components/organisms/Preference";
	import Integration from "./components/organisms/Integration";
import Help from "./components/pages/Help";

export default class App extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		this.setState({
			isLoading: false
		});
	}

	render() {
		let { isLoading } = this.state;

		if(isLoading) {
			return null;
		} else {
			return (
				<Switch>
					<Route name="dashboard" path="/dashboard" component={Dashboard}/>
					<Route name="calendar" path="/calendar" component={Calendar}/>
					<Route name="tasks" path="/tasks" component={Tasks}/>
					<Route name="evaluations" path="/evaluations" component={Evaluations}/>
					<Route name="courses" path="/courses" component={Courses}/>
					<Route name="search" path="/search" component={Search}/>
					<Route name="settings" path="/settings" component={Settings}/>
						<Route name="profile" path="settings/profile" component={Profile}/>
						<Route name="password" path="settings/password" component={Password}/>
						<Route name="preferences" path="settings/preferences" component={Preference}/>
						<Route name="integrations" path="settings/integrations" component={Integration}/>
					<Route name="help" path="/help" component={Help}/>
				</Switch>
			)
		}	
	}
}
