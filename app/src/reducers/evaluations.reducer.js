import { FETCH_EVALUATIONS, EDIT_EVALUATION, CREATE_EVALUATION, UPDATE_EVALUATION, DELETE_EVALUATION } from "../actions/types";

const initialState = {
    evaluation: {},
    evaluations: [],
    isLoading: true
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
                ...state,
                record: action.payload
            }
        case CREATE_EVALUATION:
            return {
                ...state,
                record: action.payload
            }
        case UPDATE_EVALUATION:
        return {
            ...state,
            record: action.payload
        }
        case DELETE_EVALUATION:
        return {
            ...state,
            record: action.payload
        }
        default: 
            return state;
    }
}