import { LOADING_TASKS, FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "../actions/types";

const initialState = {
    tasks: [],
    task: {},
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_TASKS:
            return {
                ...state,
                loading: true
            }
        case FETCH_TASKS:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            }
        case EDIT_TASK:
            return {
                ...state,
                loading: false,
                task: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
                loading: false,
                task: [action.payload, ...state.task]
            }
        case UPDATE_TASK:
            return {
                ...state,
                loading: false,
                task: action.payload
            }
        case DELETE_TASK:
            return {
                ...state,
                loading: false,
                task: state.task.filter(task => task._id !== action.payload)
            } 
        default: 
            return state
    }
}