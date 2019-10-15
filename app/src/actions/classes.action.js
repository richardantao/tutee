import { FETCH_CLASSES, EDIT_CLASS, CREATE_CLASS, UPDATE_CLASS, DELETE_CLASS } from "./types";
import axios from "axios";

export const fetchClasses = () => dispatch => {
    axios.get("/calendar/:userId/*")
    .then()
    .catch()
}

export const editClass = () => dispatch => {
    axios.get("/calendar/:userId/edit/:classId")
    .then()
    .catch()
}

export const createClass = () => dispatch => {
    axios.post("/calendar/:userId/create")
    .then()
    .catch()
}

export const updateClass = () => dispatch => {
    axios.put("/calendar/:userId/update/:classId")
    .then()
    .catch()
}

export const deleteClass = () => dispatch => {
    axios.delete("/calendar/:userId/delete/:classId")
    .then()
    .catch()
}