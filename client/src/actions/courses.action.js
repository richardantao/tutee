import { LOADING_COURSES, FETCH_COURSES, EDIT_COURSE, CREATE_COURSE, UPDATE_COURSE, DELETE_COURSE } from "./types";
import axios from "axios";

export const fetchCourses = () => dispatch => {
    axios.get("/courses/:userId")
    .then()
    .catch()
}

export const editCourse = () => dispatch => {
    axios.get("/courses/:userId/create")
    .then()
    .catch()
}

export const createCourse = () => dispatch => {
    axios.post("/courses/:userId/create")
    .then()
    .catch()
}

export const updateCourse = () => dispatch => {
    axios.put("/courses/:userId/update/:courseId")
    .then()
    .catch()
}

export const deleteCourse = () => dispatch => {
    axios.delete("/courses/:userId/delete/:courseId")
    .then()
    .catch()
}
