import { 
    AUTH_ERROR, USER_LOADING, USER_LOADED, LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED 
} from "./types";
import { returnErrors } from "./errors.action";
import axios from "axios";

// check and load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });

    axios.get("/", tokenConfig(getState))
    .then(res => {
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch(returnErrors(err.res.data, err.res.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
}

export const tokenConfig = getState => {
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json" 
        }
    }

    // If token, add to headers
    if(token) {
        config.headers["x-auth-token"] = token;
    }

    return config;
}




