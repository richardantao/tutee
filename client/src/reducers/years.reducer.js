import { LOADING_YEARS, FETCH_YEARS, EDIT_YEAR, CREATE_YEAR, UPDATE_YEAR, DELETE_YEAR } from "../actions/types";

const initialState = {
    loading: false,
    year: {},
    years: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_YEARS: 
            return {
                ...state,
                loading: true
            }
        case FETCH_YEARS:
            return {
                ...state,
                loading: false,
                years: action.payload
            }
        case EDIT_YEAR:
            return {
                ...state,
                loading: false,
                year: action.payload
            }
        case CREATE_YEAR:
            return {
                ...state,
                loading: false,
                year: action.payload
            }
        case UPDATE_YEAR:
            return {
                ...state,
                loading: false,
                year: action.payload
            }
        case DELETE_YEAR:
            return {
                ...state,
                loading: false,
                year: action.payload
            } 
        default: 
            return state
    }
}