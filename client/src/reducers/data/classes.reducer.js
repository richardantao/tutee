import { LOADING_CLASSES, FETCH_CLASSES, EDIT_CLASS, CREATE_CLASS, UPDATE_CLASS, DELETE_CLASS } from "../../actions/types";

const initialState = {
    classes: [],
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_CLASSES:
            return {
                ...state,
                loading: true
            };
        case FETCH_CLASSES:
            return {
                ...state,
                classes: action.payload,
                loading: false
            };
        case EDIT_CLASS:
            return {
                ...state,
                classes: action.payload,
                loading: false
            };
        case CREATE_CLASS:
            return {
                ...state,
                classes: action.payload,
                loading: false
            };
        case UPDATE_CLASS:
            return {
                ...state,
                classes: action.payload,
                loading: false
            };
        case DELETE_CLASS:
            return {
                ...state,
                classes: action.payload,
                loading: false
            };
        default: 
            return state;
    };
};