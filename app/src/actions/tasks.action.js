import { FETCH_TASKS, EDIT_TASK, CREATE_TASK, UPDATE_TASK, DELETE_TASK } from "./types";
import axios from "axios";

export const fetchTasks = () => dispatch => {
    axios.get("/tasks/:userId")
    // .then(res => {
    //     res.json();
    // })
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
    axios.get("/tasks/:userId/edit/:taskId")
    .then()
    .then()
    .catch()
}

export const createTask = (taskData) => dispatch => {
    axios.post("/tasks/:userId/create")
    .then()
    .catch()  
}

export const updateTask = () => dispatch => {
    axios.put("/tasks/:userId/update/taskId")
    .then()
    .then()
    .catch()
}

export const deleteTask = () => dispatch => {
    axios.delete("/tasks/:userId/delete/taskId")
    .then()
    .then()
    .catch(err => {
        console.log(err);
    });
}

