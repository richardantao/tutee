import { LOADING_EVALUATIONS, FETCH_EVALUATIONS, EDIT_EVALUATION, CREATE_EVALUATION, UPDATE_EVALUATION, DELETE_EVALUATION } from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_EVALUATIONS
    };
};

export const fetchEvaluations = () => dispatch => {
    dispatch(setLoading());
    
    axios.get("/evaluations")
    .then(res => dispatch({
        type: FETCH_EVALUATIONS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editEvaluation = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/evaluations/edit/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: EDIT_EVALUATION,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createEvaluation = newEvaluation => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/evaluations/create", newEvaluation, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_EVALUATION,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateEvaluation = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.put(`/evaluations/update/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_EVALUATION,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteEvaluation = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.delete(`/evaluations/delete/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_EVALUATION,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};