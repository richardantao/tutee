import { 
    LOADING_ASSESSMENTS, 
    FETCH_ASSESSMENTS, FETCH_PAST_ASSESSMENTS,
    EDIT_ASSESSMENT, 
    NEW_ASSESSMENT, CREATE_ASSESSMENT, 
    UPDATE_ASSESSMENT, DELETE_ASSESSMENT 
} from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_ASSESSMENTS
    };
};

export const fetchAssessments = () => dispatch => {
    dispatch(setLoading());
    
    axios.get("/assessments")
    .then(res => dispatch({
        type: FETCH_ASSESSMENTS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const fetchPastAssessments = () => dispatch => {
    dispatch(setLoading());

    axios.get("/assessments/past")
    .then(res => dispatch({
        type: FETCH_PAST_ASSESSMENTS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editAssessment = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/assessments/edit/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: EDIT_ASSESSMENT,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const newAssessment = courses => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get("/assessments/new", courses, tokenConfig(getState))
    .then(res => dispatch({
        type: NEW_ASSESSMENT,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createAssessment = newAssessment => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/assessments/create", newAssessment, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_ASSESSMENT,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateAssessment = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.put(`/assessments/update/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_ASSESSMENT,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteAssessment = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.delete(`/assessments/delete/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_ASSESSMENT,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};