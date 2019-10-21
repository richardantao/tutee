import { combineReducers } from "redux";

import years from "./years.reducer";
import terms from "./terms.reducer";
import courses from "./courses.reducer";
import modules from "./modules.reducer";
import classes from "./classes.reducer";
import evaluations from "./evaluations.reducer";
import tasks from "./tasks.reducer";
import nav from "./nav.reducer";
import auth from "./auth.reducer";
import errors from "./errors.reducer";

export default combineReducers({ years, terms, courses, modules, classes, evaluations, tasks, nav, auth, errors });