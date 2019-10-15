import { combineReducers } from "redux";

import years from "./years.reducer";
import terms from "./terms.reducer";
import courses from "./courses.reducer";
import modules from "./modules.reducer";
import classes from "./classes.reducer";
import evaluations from "./evaluations.reducer";
import tasks from "./tasks.reducer";

export default combineReducers({ years, terms, courses, modules, classes, evaluations, tasks });