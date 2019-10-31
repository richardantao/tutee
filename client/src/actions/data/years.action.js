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

export const editYear = id => dispatch => {
    dispatch(setLoading());

    axios.get(`/courses/years/edit/${id}`)
    .then(res => dispatch({
        type: EDIT_YEAR,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createYear = year => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/courses/years/create", year, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_YEAR, 
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateYear = id => dispatch => {
    dispatch(setLoading());
    
    axios.put(`/courses/years/update/${id}`)
    .then(res => dispatch({
        type: UPDATE_YEAR,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteYear = () => dispatch => {
    axios.delete("/courses/:userId/years/delete/:yearId")
    .then(res => dispatch({
        type: DELETE_YEAR,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
