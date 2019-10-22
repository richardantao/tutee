import { 
    AUTH_ERROR, USER_LOADING, USER_LOADED, LOGIN_SUCCESS,
    LOGIN_FAILED, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAILED 
} from "../types";
import { returnErrors } from "./errors.action";
import axios from "axios";

// check and load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: USER_LOADING });

    // match url
    axios.get("/user", tokenConfig(getState))
    .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.message, err.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
};

// Register User
export const register = ({ firstName, lastName, email, password }) => dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request body
    const body = JSON.stringify({ firstName, lastName, email, password });

    axios.post("/", body, config)
    .then(res => dispatch({
       type: REGISTER_SUCCESS,
       payload: res.data 
    }))
    .catch(err => {
        dispatch(
            returnErrors(err.res.data, err.res.status, "REGISTER_FAIL")
        );
        dispatch({
            type: REGISTER_FAILED
        });
    });
};

// Login User
export const login = ({ email, password }) => dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const body = JSON.stringify({ email, password });

    axios.post("/", body, config)
    .then(res => dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(
            returnErrors(err.res.data, err.res.status, "LOGIN_FAILED")
        );
        dispatch({
            type: LOGIN_FAILED
        });
    });
};

// Logout User
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    };
};

// Set config/headers and token
export const tokenConfig = getState => {
    const token = getState().auth.token;

    // Headers
    const config = {
        headers: {
            "Content-type": "application/json" 
        }
    };

    // If token, add to headers
    if(token) {
        config.headers["x-auth-token"] = token;
    };

    return config;
};




