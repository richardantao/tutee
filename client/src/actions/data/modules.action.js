import { LOADING_MODULES, FETCH_MODULES, EDIT_MODULE, CREATE_MODULE, UPDATE_MODULE, DELETE_MODULE } from "../types";
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

export const editModule = id => dispatch => {
    dispatch(setLoading());
    
    axios.get(`/courses/modules/edit/:${id}`)
    .then(res => dispatch({
        type: EDIT_MODULES,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
}

export const createModule = newModule => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/courses/modules/create", newModule, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_MODULES,
        payload: newModule
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
}

export const updateModule = id => dispatch => {
    dispatch(setLoading());

    axios.get(`/courses/modules/update/:${id}`)
    .then(res => dispatch({
        type: UPDATE_MODULES,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
}

export const deleteModule = id => dispatch => {
    dispatch(setLoading());

    axios.get(`/courses/modules/delete/:${id}`)
    .then(res => dispatch({
        type: DELETE_MODULES,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
