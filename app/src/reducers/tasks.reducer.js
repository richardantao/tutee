import { FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK, EDIT_CLASS } from "../actions/types";

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
        case EDIT_TASK:
            return {
                ...state
            }
        case CREATE_TASK:
            return {
                ...state
            }
        case UPDATE_TASK:
            return {
                ...state
            }
        case DELETE_TASK:
            return {
                ...state
            } 
        default: 
            return state
    }
}