import { LOADING_TERMS, FETCH_TERMS, EDIT_TERM, CREATE_TERM, UPDATE_TERM, DELETE_TERM } from "../types";
import axios from "axios";

export const fetchTerms = () => dispatch => {
    axios.get("/courses/:userId")
    .then()
    .catch()
}

export const editTerm = () => dispatch => {
    axios.get("/courses/:userId/terms/edit/:termId")
    .then()
    .catch()
}

export const createTerm = () => dispatch => {
    axios.post("/courses/:userId/terms/create")
    .then()
    .catch()
}

export const updateTerm = () => dispatch => {
    axios.put("/courses/:userId/terms/update/:termId")
    .then()
    .catch()
}

export const deleteTerm = () => dispatch => {
    axios.delete("/courses/:userId/terms/delete/:termId")
    .then()
    .catch()
}
