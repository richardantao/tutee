import { LOADING_CLASSES, FETCH_CLASSES, EDIT_CLASS, CREATE_CLASS, UPDATE_CLASS, DELETE_CLASS } from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_CLASSES
    };
};

export const fetchClasses = () => dispatch => {
    dispatch(setLoading());
    
    axios.get("/calendar/*")
    .then(res => dispatch({ 
        type: FETCH_CLASSES,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editClass = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/calendar/edit/:${id}`, tokenConfig(getState))
    .then(res => dispatch({ 
        type: EDIT_CLASS,
        payload: id // or object ?
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createClass = newClass => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/calendar/create", newClass, tokenConfig(getState))
    .then(res => dispatch({ 
        type: CREATE_CLASS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateClass = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.put(`/calendar/update/:${id}`, tokenConfig(getState))
    .then(res => dispatch({ 
        type: UPDATE_CLASS,
        payload: id // or update object?
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteClass = id => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.delete(`/calendar/delete/:${id}`, tokenConfig(getState))
    .then(res => dispatch({ 
        type: DELETE_CLASS,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};