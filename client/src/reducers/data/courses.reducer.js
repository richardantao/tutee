import { LOADING_COURSES, FETCH_COURSES, EDIT_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from "../../actions/types";

const initialState = {
    courses: [],
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_COURSES:
            return {
                ...state,
                loading: true
            };
        case FETCH_COURSES:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case EDIT_COURSE:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case CREATE_COURSE:
            return {
                ...state,
                courses: [action.payload, ...state.courses],
                loading: false
            };
        case UPDATE_COURSE:
            return {
                ...state,
                courses: action.payload,
                loading: false
            };
        case DELETE_COURSE:
            return {
                ...state,
                courses: state.courses.filter(course => course.id !== action.payload),
                loading: false
            };
        default: 
            return state;
    };
};
