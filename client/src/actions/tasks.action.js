import { LOADING_TASKS, FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "./types";
import axios from "axios";

export const setLoading = () => dispatch => {
    return {
        type: LOADING_TASKS
    }
}

export const fetchTasks = () => dispatch => {
    dispatch(setLoading());

    axios.get("/tasks/:userId")
    .then(res => {
        dispatch({
            type: FETCH_TASKS, 
            payload: res.data
        });
    })
    .catch(err => {
        throw err;
    });
}

export const editTask = id => dispatch => {
    axios.get(`/tasks/${id}/edit/:taskId`)
    .then()
    .then(task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        });
    })
    .catch(err => {
        throw err;
    });
}

export const createTask = taskData => dispatch => {
    axios.post("/tasks/:userId/create", taskData)
    .then(res => {
        dispatch({
            type: CREATE_TASK,
            payload: res.data
        });
    })
    .catch()  
}

export const updateTask = id => dispatch => {
    axios.put(`/tasks/${id}/update/taskId`)
    .then()
    .then(task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    })
    .catch(err => {
        throw err;
    });
}

export const deleteTask = id => dispatch => {
    axios.delete(`/tasks/${id}/delete/:taskId`)
    .then(res => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    })
    .catch(err => {
        throw err;
    });
}

