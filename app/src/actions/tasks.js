import { FETCH_TASKS, NEW_TASK } from "./types";

export const fetchTasks = () => dispatch => {
    axios.get("/tasks")
    .then(res => res.json())
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