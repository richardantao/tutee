import { FETCH_COURSES, EDIT_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from "../actions/types";

const initialState = {
    courses: [],
    course: {}
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
                ...state
            }
        case CREATE_COURSE:
            return {
                ...state
            }
        case UPDATE_COURSE:
        return {
            
        }
        case DELETE_COURSE:
        return {
            ...state
        }
        default: 
            return state;
    }
}
