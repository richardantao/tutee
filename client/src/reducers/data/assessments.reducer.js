import { 
    LOADING_ASSESSMENTS, FETCH_ASSESSMENTS, FETCH_PAST_ASSESSMENTS,
    NEW_ASSESSMENT, CREATE_ASSESSMENT, 
    EDIT_ASSESSMENT, UPDATE_ASSESSMENT, DELETE_ASSESSMENT
} from "../../actions/types";

const initialState = {
    assessments: [],
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_ASSESSMENTS:
            return {
                ...state,
                loading: false
            };
        case FETCH_ASSESSMENTS:
            return {
                ...state,
                assessments: action.payload,
                loading: false
            };
        case FETCH_PAST_ASSESSMENTS:
            return {
                ...state,
                assessments: action.payload,
                loading: false
            };
        case NEW_ASSESSMENT:
            return {
                ...state,
                loading: false
            };
        case CREATE_ASSESSMENT:
            return {
                ...state,
                assessments: [action.payload, ...state.assessments],
                loading: false
            };
        case EDIT_ASSESSMENT:
            return {
                ...state,
                assessments: action.payload,
                loading: false
            };
        case UPDATE_ASSESSMENT:
            return {
                ...state,
                assessments: action.payload,
                loading: false
            };
        case DELETE_ASSESSMENT:
            return {
                ...state,
                assessments: state.assessments.filter(assessment => assessment._id !== action.payload),
                loading: false
            };
        default: 
            return state;
    };
};