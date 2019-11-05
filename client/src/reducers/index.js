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
import integrations from "./data/integrations.reducer";

// functions
import counter from "./functions/counter.reducer";

// views
import nav from "./views/nav.reducer";

//molecules

const authReducers = { auth, errors };
const dataReducers = { years, terms, courses, modules, classes, evaluations, tasks, integrations };
const functionReducers = { counter }
const viewReducers = { nav }

export default combineReducers(authReducers, dataReducers, functionReducers, viewReducers);