import { FETCH_TERMS, EDIT_TERM, CREATE_TERM, UPDATE_TERM, DELETE_TERM } from "../actions/types";

const initialState = {
    isLoading: true,
    term: {},
    terms: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TERMS:
            return {
                ...state,
                records: action.payload
            }
        case EDIT_TERM:
            return {
                ...state,
                record: action.payload
            }
        case CREATE_TERM:
            return {
                ...state,
                record: action.payload
            }
        case UPDATE_TERM:
            return {
                ...state,
                record: action.payload
            }
        case DELETE_TERM:
            return {
                ...state,
                record: action.payload
            } 
        default: 
            return state
    }
}
