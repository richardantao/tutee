import { FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "./types";
import axios from "axios";

export const fetchTasks = () => dispatch => {
    axios.get("/tasks/:userId")
    .then(res => {
        res.json()
    })
    .then(tasks => {
        dispatch({
            type: FETCH_TASKS, 
            payload: tasks
        })
    })
    .catch(err => {
        throw err;
    });
}

export const editTask = () => dispatch => {

}

export const createTask = (taskData) => dispatch => {
    axios.post("/tasks/:userId/create")  
}

export const updateTask = () => dispatch => {

}

export const deleteTask = () => dispatch => {

}

