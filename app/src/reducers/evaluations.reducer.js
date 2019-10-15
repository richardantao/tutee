import { FETCH_EVALUATIONS, EDIT_EVALUATION, CREATE_EVALUATION, UPDATE_EVALUATION, DELETE_EVALUATION } from "../actions/types";

const initialState = {
    evaluations: [],
    evaluation: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EVALUATIONS:
            return {
                ...state,
                records: action.payload
            }
        case EDIT_EVALUATION:
            return {
                ...state
            }
        case CREATE_EVALUATION:
            return {
                ...state
            }
        case UPDATE_EVALUATION:
        return {
            ...state
        }
        case DELETE_EVALUATION:
        return {
            ...state
        }
        default: 
            return state;
    }
}