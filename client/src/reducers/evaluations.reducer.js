import { LOADING_EVALUATIONS, FETCH_EVALUATIONS, EDIT_EVALUATION, CREATE_EVALUATION, UPDATE_EVALUATION, DELETE_EVALUATION } from "../actions/types";

const initialState = {
    evaluation: {},
    evaluations: [],
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_EVALUATIONS:
            return {
                ...state,
                loading: false
            }
        case FETCH_EVALUATIONS:
            return {
                ...state,
                evaluations: action.payload,
                loading: false
            }
        case EDIT_EVALUATION:
            return {
                ...state,
                evaluation: action.payload,
                loading: false
            }
        case CREATE_EVALUATION:
            return {
                ...state,
                evaluation: action.payload,
                loading: false
            }
        case UPDATE_EVALUATION:
        return {
            ...state,
            evaluation: action.payload,
            loading: false
        }
        case DELETE_EVALUATION:
        return {
            ...state,
            evaluation: action.payload,
            loading: false
        }
        default: 
            return state;
    }
}