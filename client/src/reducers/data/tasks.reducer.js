import { LOADING_TASKS, FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "../../actions/types";

const initialState = {
    loading: false,
    tasks: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_TASKS:
            return {
                ...state,
                loading: true
            };
        case FETCH_TASKS:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            };
        case EDIT_TASK:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            };
        case CREATE_TASK:
            return {
                ...state,
                loading: false,
                tasks: [action.payload, ...state.tasks]
            };
        case UPDATE_TASK:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            };
        case DELETE_TASK:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.filter(task => task._id !== action.payload)
            };
        default: 
            return state;
    };
};