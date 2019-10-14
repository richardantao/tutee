import { FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/types";

const initialState = {
    tasks: [],
    task: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TASKS:
            return {
                ...state,
                records: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
            }
        default: 
            return state;
    }
}