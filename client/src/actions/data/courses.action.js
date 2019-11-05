import { 
    LOADING_COURSES, 
    FETCH_COURSES, EDIT_COURSE, 
    NEW_COURSE, CREATE_COURSE, 
    UPDATE_COURSE, DELETE_COURSE 
} from "../types";
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
    
    axios.get("/academics")
    .then(res => dispatch({
        type: FETCH_COURSES,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editCourse = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/academics/courses/edit/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: EDIT_COURSE,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const newCourse = terms => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get("/academics/courses/", terms, tokenConfig(getState))
    .then(res => dispatch({
        type: NEW_COURSE,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createCourse = course => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/academics/courses/create", course, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_COURSE,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateCourse = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.put(`/academics/courses/update/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_COURSE,
        payload: id // id and/or update course?
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteCourse = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.delete(`/academics/courses/delete/:${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: DELETE_COURSE,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
