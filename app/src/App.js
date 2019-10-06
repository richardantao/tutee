import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ReactGA from 'react-ga';

import Dashboard from "./components/pages/Dashboard";
import Calendar from "./components/pages/Calendar";
import Tasks from "./components/pages/Tasks";
import Evaluations from "./components/pages/Evaluations";
import Courses from "./components/pages/Courses";
import Search from "./components/pages/Search";
import Settings from "./components/pages/Settings";
import Help from "./components/pages/Help";
import "./App";
import './App.scss';

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

	initializeReactGA() {
		ReactGA.initialize('UA-000000-01'); // check tracking id
		ReactGA.pageview(window.location.pathname + window.location.search);
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
					<Route name="help" path="/help" component={Help}/>
				</Switch>
			)
		}	
	}
}
