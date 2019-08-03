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
				<Route path="/Dashboard" component={Dashboard}/>
				<Route path="/Calendar" component={Calendar}/>
				<Route path="/Tasks" component={Tasks}/>
				<Route path="/Evaluations" component={Evaluations}/>
				<Route path="/Courses" component={Courses}/>
				<Route path="/Search" component={Search}/>
				<Route path="/Settings" component={Settings}/>
					<Route path="Settings/Profile" component={Profile}/>
					<Route path="Settings/Password" component={Password}/>
					<Route path="Settings/Preferences" component={Preference}/>
					<Route path="Settings/Integrations" component={Integration}/>
				<Route path="/Help" component={Help}/>
			</Switch>
	)
}

export default App;
