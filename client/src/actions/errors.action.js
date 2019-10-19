import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const returnErrors = (message, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload: { message, status, id }
    };
}

export const clearErrors = () => dispatch => {
    return {
        type: CLEAR_ERRORS
    };
}