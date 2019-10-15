import { FETCH_MODULES, EDIT_MODULE, CREATE_MODULE, UPDATE_MODULE, DELETE_MODULE } from "../actions/types";

const initialState = {
    modules: [],
    module: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MODULES:
            return {
                ...state
                
            }
        case EDIT_MODULE:
            return {
                ...state
            }
        case CREATE_MODULE:
            return {
                ...state
            }
        case UPDATE_MODULE:
        return {
            ...state
        }
        case DELETE_MODULE:
        return {
            ...state
        }
        default: 
            return state;
    }
}
