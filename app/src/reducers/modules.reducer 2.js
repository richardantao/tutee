import { FETCH_MODULES, EDIT_MODULE, CREATE_MODULE, UPDATE_MODULE, DELETE_MODULE } from "../actions/types";

const initialState = {
    modules: [],
    module: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MODULES:
            return {
                ...state,
                record: action.payload
                
            }
        case EDIT_MODULE:
            return {
                ...state,
                record: action.payload
            }
        case CREATE_MODULE:
            return {
                ...state,
                record: action.payload
            }
        case UPDATE_MODULE:
        return {
            ...state,
            record: action.payload
        }
        case DELETE_MODULE:
        return {
            ...state,
            record: action.payload
        }
        default: 
            return state;
    }
}
