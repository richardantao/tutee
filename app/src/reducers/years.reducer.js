import { FETCH_YEARS, EDIT_YEAR, CREATE_YEAR, UPDATE_YEAR, DELETE_YEAR } from "../actions/types";

const initialState = {
    years: [],
    year: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_YEARS:
            return {
                ...state,
                records: action.payload
            }
        case EDIT_YEAR:
            return {
                ...state
            }
        case CREATE_YEAR:
            return {
                ...state
            }
        case UPDATE_YEAR:
            return {
                ...state
            }
        case DELETE_YEAR:
            return {
                ...state
            } 
        default: 
            return state
    }
}