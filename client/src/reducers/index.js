import { combineReducers } from "redux";

// auth 
import auth from "./auth/auth.reducer";
import errors from "./auth/errors.reducer";

// data
import years from "./data/years.reducer";
import terms from "./data/terms.reducer";
import courses from "./data/courses.reducer";
import modules from "./data/modules.reducer";
import classes from "./data/classes.reducer";
import evaluations from "./data/evaluations.reducer";
import tasks from "./data/tasks.reducer";

// organisms
import nav from "./organisms/nav.reducer";

//molecules

export default combineReducers({ auth, errors, years, terms, courses, modules, classes, evaluations, tasks, nav });