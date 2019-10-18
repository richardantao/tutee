import { LOADING_EVALUATIONS, FETCH_EVALUATIONS, EDIT_EVALUATION, CREATE_EVALUATION, UPDATE_EVALUATION, DELETE_EVALUATION } from "./types";
import axios from "axios";

export const fetchEvaluations = () => dispatch => {
    axios.get("/evaluations/:userId")
    .then()
    .catch()
}

export const editEvaluation = () => dispatch => {
    axios.get("/evaluations/:userId/edit/:evaluationId")
    .then()
    .catch()
}

export const createEvaluation = () => dispatch => {
    axios.post("/evaluations/:userId/create")
    .then()
    .catch()
}

export const updateEvaluation = () => dispatch => {
    axios.put("/evaluations/:userId/update/:evaluationId")
    .then()
    .catch()
}

export const deleteEvaluation = () => dispatch => {
    axios.delete("/evaluations/:userId/delete/:evaluationId")
    .then()
    .catch()
}