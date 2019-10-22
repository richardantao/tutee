import { 
    ACTIVATE_DASHBOARD, ACTIVATE_CALENDAR, ACTIVATE_TASKS, ACTIVATE_EVALUATIONS,
    ACTIVATE_COURSES, ACTIVATE_SEARCH, ACTIVATE_SETTINGS, ACTIVATE_HELP
} from "../../actions/types";

const initialState = {
    active: ""
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTIVATE_DASHBOARD:
            return {
            active: "dashboard"  
            };
        case ACTIVATE_CALENDAR:
            return {
                active: "calendar"
            };
        case ACTIVATE_TASKS:
            return {
                active: "tasks"
            };
        case ACTIVATE_EVALUATIONS:
            return {
                active: "evaluations"
            };
        case ACTIVATE_COURSES:
            return {
                active: "courses"
            };
        case ACTIVATE_SEARCH:
            return {
                active: "search"
            };
        case ACTIVATE_SETTINGS:
            return {
                active: "settings"
            };
        case ACTIVATE_HELP:
            return {
                active: "help"
            };
        default: 
            return state;
    }
}
