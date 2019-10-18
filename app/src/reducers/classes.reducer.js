import { FETCH_CLASSES, EDIT_CLASS, CREATE_CLASS, UPDATE_CLASS, DELETE_CLASS } from "../actions/types";

const initialState = {
    class: {},
    classes: [],
    isLoading: true
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES:
            return {
                ...state,
                records: action.payload
            }
        case EDIT_CLASS:
            return {
                ...state,
                record: action.payload
            }
        case CREATE_CLASS:
            return {
                ...state,
                record: action.payload
            }
        case UPDATE_CLASS:
        return {
            ...state,
            record: action.payload
        }
        case DELETE_CLASS:
        return {
            ...state,
            record: action.payload
        }
        default: 
            return state;
    }
}