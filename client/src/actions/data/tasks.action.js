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
        returnErrors(err.res.data, err.res.status))
    );
};

export const editTask = id => dispatch => {
    axios.get(`/tasks/${id}/edit/:taskId`)
    .then(task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        });
    })
    .catch(err => {
        throw err;
    });
};

export const createTask = task => (dispatch, getState) => {
    axios.post("/tasks/create", task, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_TASK,
        payload: res.data
    }))
    .catch(err => dispatch(

    ));
};

export const updateTask = id => (dispatch, getState) => {
    axios.put(`/tasks/update/${id}`, tokenConfig(getState))
    .then(res => dispatch({
        type: UPDATE_TASK,
        payload: id
    }))
    .catch(err => dispatch(
        returnErrors(err.res.data, err.res.status))
    );
};

export const deleteTask = id => (dispatch, getState) => {
    axios.delete(`/tasks/delete/${id}`, tokenConfig(getState))
    .then(res => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    })
    .catch(err => dispatch(
        returnErrors(err.res.data, err.res.status))
    );
};

