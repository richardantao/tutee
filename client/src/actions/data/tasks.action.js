import { LOADING_TASKS, FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_TASKS
    };
};

export const fetchTasks = () => dispatch => {
    dispatch(setLoading());

    axios.get("/tasks")
    .then(res => {
        dispatch({
            type: FETCH_TASKS, 
            payload: res.data
        });
    })
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editTask = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.get(`/tasks/edit/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: EDIT_TASK,
            payload: id // verify
        });
    })
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createTask = newTask => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/tasks/create", newTask, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_TASK,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateTask = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.put(`/tasks/update/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_TASK,
        payload: id // verify
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status))
    );
};

export const deleteTask = id => (dispatch, getState) => {
    dispatch(setLoading());

    axios.delete(`/tasks/delete/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    })
    .catch(err => dispatch(
        returnErrors(err.res.data, err.res.status)
    ));
};

