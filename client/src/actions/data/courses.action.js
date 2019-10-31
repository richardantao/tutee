import { LOADING_COURSES, FETCH_COURSES, EDIT_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_COURSES
    };
};

export const fetchCourses = () => dispatch => {
    dispatch(setLoading());
    
    axios.get("/courses")
    .then(res => dispatch({
        type: FETCH_COURSES,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editCourse = id => dispatch => {
    dispatch(setLoading());

    axios.get(`/courses/edit/:${id}`)
    .then(res => dispatch({
        type: EDIT_COURSE,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createCourse = course => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/courses/create", course, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_COURSE,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateCourse = () => dispatch => {
    dispatch(setLoading());

    axios.put(`/courses/update/:${id}`)
    .then(res => dispatch({
        type: UPDATE_COURSE,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteCourse = id => dispatch => {
    dispatch(setLoading());

    axios.delete(`/courses/delete/:${id}`)
    .then(res => dispatch({
        type: DELETE_COURSE,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
