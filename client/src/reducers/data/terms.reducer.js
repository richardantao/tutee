import { 
    LOADING_TERMS, FETCH_TERMS, EDIT_TERM, CREATE_TERM, UPDATE_TERM, DELETE_TERM 
} from "../../actions/types";

const initialState = {
    terms: [],
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_TERMS:
            return {
                ...state,
                loading: true
            };
        case FETCH_TERMS:
            return {
                ...state,
                terms: action.payload,
                loading: false
            };
        case EDIT_TERM:
            return {
                ...state,
                terms: action.payload,
                loading: false
            };
        case CREATE_TERM:
            return {
                ...state,
                terms: action.payload,
                loading: false
            };
        case UPDATE_TERM:
            return {
                ...state,
                terms: action.payload,
                loading: false
            };
        case DELETE_TERM:
            return {
                ...state,
                terms: action.payload,
                loading: false
            }; 
        default: 
            return state;
    };
};
