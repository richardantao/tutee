import { LOADING_MODULES, 
    FETCH_MODULES, EDIT_MODULE, 
    NEW_MODULE, CREATE_MODULE, 
    UPDATE_MODULE, DELETE_MODULE 
} from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_MODULES
    };
};

export const fetchModules = () => dispatch => {
    dispatch(setLoading());
    
    axios.get("/courses")
    .then(res => dispatch({
        type: FETCH_MODULES,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editModule = id => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.get(`/courses/modules/edit/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: EDIT_MODULE,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const newModule = courses => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get("/courses/modules/new", courses, tokenConfig(getState))
    .then(res => dispatch({
        type: NEW_MODULE,
        payload: res.data // change so that the payload is the parent courses 
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createModule = newModule => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/courses/modules/create", newModule, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_MODULE,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
}

export const updateModule = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/courses/modules/update/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_MODULE,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
}

export const deleteModule = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/courses/modules/delete/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_MODULE,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
