import { LOADING_YEARS, FETCH_YEARS, EDIT_YEAR, CREATE_YEAR, UPDATE_YEAR, DELETE_YEAR } from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_YEARS
    };
};

export const fetchYears = () => dispatch => {
    dispatch(setLoading());

    axios.get("/courses")
    .then(res => dispatch({
        type: FETCH_YEARS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editYear = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/courses/years/edit/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: EDIT_YEAR,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createYear = newYear => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/courses/years/create", newYear, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_YEAR, 
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateYear = id => (dispatch, getState) => {
    dispatch(setLoading());
    
    axios.put(`/courses/years/update/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_YEAR,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteYear = id => (dispatch, getState) => {
    axios.delete(`/courses/years/delete/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_YEAR,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
