import { LOADING_TERMS, FETCH_TERMS, EDIT_TERM, CREATE_TERM, UPDATE_TERM, DELETE_TERM } from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_TERMS
    };
};

export const fetchTerms = () => dispatch => {
    dispatch(setLoading());
    
    axios.get("/courses")
    .then(res => dispatch({
        type: FETCH_TERMS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editTerm = id => dispatch => {
    dispatch(setLoading());
    
    axios.get(`/courses/terms/edit/:${id}`)
    .then(res => dispatch({
        type: EDIT_TERM,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createTerm = newTerm => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/courses/terms/create", newTerm, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_TERM,
        payload: newTerm
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateTerm = id => dispatch => {
    dispatch(setLoading());

    axios.put(`/courses/terms/update/:${id}`)
    .then(res => dispatch({
        type: UPDATE_TERM,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteTerm = id => dispatch => {
    dispatch(setLoading());

    axios.delete(`/courses/terms/delete/:${id}`)
    .then(res => dispatch({
        type: DELETE_TERM,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
