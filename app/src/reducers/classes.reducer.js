import { FETCH_CLASSES, EDIT_CLASS, CREATE_CLASS, UPDATE_CLASS, DELETE_CLASS } from "../actions/types";

const initialState = {
    classes: [],
    class: {}
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
                ...state
            }
        case CREATE_CLASS:
            return {
                ...state
            }
        case UPDATE_CLASS:
        return {
            
        }
        case DELETE_CLASS:
        return {
            ...state
        }
        default: 
            return state;
    }
}