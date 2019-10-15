import { FETCH_MODULES, EDIT_MODULE, CREATE_MODULE, UPDATE_MODULE, DELETE_MODULE } from "./types";
import axios from "axios";

export const fetchModules = () => dispatch => {
    axios.get("/courses/:userId")
    .then()
    .catch(err => {
        
    })
}

export const editModule = () => dispatch => {
    axios.get("/courses/:userId/modules/edit/:moduleId")
    .then()
    .catch()
}

export const createModule = () => dispatch => {
    axios.post("/courses/:userId/modules/create")
    .then()
    .catch()
}

export const updateModule = () => dispatch => {
    axios.get("/courses/:userId/modules/update/:moduleId")
    .then()
    .catch()
}

export const deleteModule = () => dispatch => {
    axios.get("/courses/:userId/modules/delete/:moduleId")
    .then()
    .catch()
}
