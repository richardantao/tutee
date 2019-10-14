import { FETCH_TASKS, NEW_TASK } from "../actions/types";

const initialState = {
    tasks: [],
    task: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        default: 
            return state;
    }
}