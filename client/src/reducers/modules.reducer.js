import { LOADING_MODULES, FETCH_MODULES, EDIT_MODULE, CREATE_MODULE, UPDATE_MODULE, DELETE_MODULE } from "../actions/types";

const initialState = {
    loading: false,
    module: {},
    modules: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_MODULES: 
            return {
                ...state,
                loading: true
            }
        case FETCH_MODULES:
            return {
                ...state,
                loading: false,
                modules: action.payload
                
            }
        case EDIT_MODULE:
            return {
                ...state,
                loading: false,
                modules: action.payload
            }
        case CREATE_MODULE:
            return {
                ...state,
                loading: false,
                module: action.payload
            }
        case UPDATE_MODULE:
        return {
            ...state,
            loading: false,
            module: action.payload
        }
        case DELETE_MODULE:
        return {
            ...state,
            loading: false,
            module: action.payload
        }
        default: 
            return state;
    }
}
