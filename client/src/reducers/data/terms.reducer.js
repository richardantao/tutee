import { LOADING_TERMS, FETCH_TERMS, EDIT_TERM, CREATE_TERM, UPDATE_TERM, DELETE_TERM } from "../../actions/types";

const initialState = {
    loading: false,
    term: {},
    terms: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_TERMS:
            return {
                ...state,
                loading: true
            }
        case FETCH_TERMS:
            return {
                ...state,
                loading: false,
                terms: action.payload
            }
        case EDIT_TERM:
            return {
                ...state,
                loading: false,
                term: action.payload
            }
        case CREATE_TERM:
            return {
                ...state,
                loading: false,
                term: action.payload
            }
        case UPDATE_TERM:
            return {
                ...state,
                loading: false,
                term: action.payload
            }
        case DELETE_TERM:
            return {
                ...state,
                loading: false,
                term: action.payload
            } 
        default: 
            return state
    }
}
