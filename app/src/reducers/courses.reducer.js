import { FETCH_COURSES, EDIT_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from "../actions/types";

const initialState = {
    course: {},
    courses: [],
    isLoading: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COURSES:
            return {
                ...state,
                records: action.payload
            }
        case EDIT_COURSE:
            return {
                ...state,
                record: action.payload
            }
        case CREATE_COURSE:
            return {
                ...state,
                record: action.payload
            }
        case UPDATE_COURSE:
            return {
                ...state,
                    record: action.payload
            }
        case DELETE_COURSE:
            return {
                ...state,
                record: action.payload
            }
        default: 
            return state;
    }
}
