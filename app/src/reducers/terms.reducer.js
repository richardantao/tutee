import { FETCH_TERMS, EDIT_TERM, CREATE_TERM, UPDATE_TERM, DELETE_TERM } from "../actions/types";

const initialState = {
    terms: [],
    term: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TERMS:
            return {
                ...state
            }
        case EDIT_TERM:
            return {
                ...state
            }
        case CREATE_TERM:
            return {
                ...state
            }
        case UPDATE_TERM:
            return {
                ...state
            }
        case DELETE_TERM:
            return {
                ...state
            } 
        default: 
            return state
    }
}
