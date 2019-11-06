import {
    LOADING_TASKS, FETCH_TASKS, FETCH_PAST_TASKS,
    NEW_TASK, CREATE_TASK, 
    EDIT_TASK, UPDATE_TASK, DELETE_TASK 
} from "../../actions/types";

const initialState = {
    tasks: [],
    loading: false
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
                tasks: action.payload,
                loading: false
            };
        case FETCH_PAST_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false  
            };
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task._id === action.payload.id ? (action.payload.data) : {...state}),
                loading: false
            };
        case NEW_TASK:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case CREATE_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                loading: false
            };
        case UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task._id === action.payload.id ? (action.payload.data) : {...state}),
                loading: false
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload),
                loading: false
            };
        default: 
            return state;
    };
};