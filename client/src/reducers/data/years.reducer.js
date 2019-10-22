import { 
    LOADING_YEARS, FETCH_YEARS, EDIT_YEAR, CREATE_YEAR, UPDATE_YEAR, DELETE_YEAR 
} from "../../actions/types";

const initialState = {
    years: [],
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_YEARS: 
            return {
                ...state,
                loading: true
            };
        case FETCH_YEARS:
            return {
                ...state,
                years: action.payload,
                loading: false
            };
        case EDIT_YEAR:
            return {
                ...state,
                years: action.payload,
                loading: false
            };
        case CREATE_YEAR:
            return {
                ...state,
                years: action.payload,
                loading: false
            };
        case UPDATE_YEAR:
            return {
                ...state,
                years: action.payload,
                loading: false
            };
        case DELETE_YEAR:
            return {
                ...state,
                years: action.payload,
                loading: false   
            };
        default: 
            return state;
    };
};