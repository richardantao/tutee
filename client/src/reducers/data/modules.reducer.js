import { 
    LOADING_MODULES, FETCH_MODULES, EDIT_MODULE, CREATE_MODULE, UPDATE_MODULE, DELETE_MODULE 
} from "../../actions/types";

const initialState = {
    modules: [],
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_MODULES: 
            return {
                ...state,
                loading: true
            };
        case FETCH_MODULES:
            return {
                ...state,
                modules: action.payload,
                loading: false        
            };
        case EDIT_MODULE:
            return {
                ...state,
                modules: action.payload,
                loading: false
            };
        case CREATE_MODULE:
            return {
                ...state,
                modules: action.payload,
                loading: false
            };
        case UPDATE_MODULE:
            return {
                ...state,
                modules: action.payload,
                loading: false
            };
        case DELETE_MODULE:
            return {
                ...state,
                modules: action.payload,
                loading: false
            };
        default: 
            return state;
    };
};
