import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
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

const App = () => {
	return (
			<Switch>
				<Route name="dashboard" path="/Dashboard" component={Dashboard}/>
				<Route name="calendar" path="/Calendar" component={Calendar}/>
				<Route name="tasks" path="/Tasks" component={Tasks}/>
				<Route name="evaluations" path="/Evaluations" component={Evaluations}/>
				<Route name="courses" path="/Courses" component={Courses}/>
				<Route name="search" path="/Search" component={Search}/>
				<Route name="settings" path="/Settings" component={Settings}/>
					<Route name="profile" path="Settings/Profile" component={Profile}/>
					<Route name="password" path="Settings/Password" component={Password}/>
					<Route name="preferences" path="Settings/Preferences" component={Preference}/>
					<Route name="integrations" path="Settings/Integrations" component={Integration}/>
				<Route name="help" path="/Help" component={Help}/>
			</Switch>
	)
}

export default App;
