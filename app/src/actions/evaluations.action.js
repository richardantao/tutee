import { FETCH_EVALUATIONS, EDIT_EVALUATION, CREATE_EVALUATION, UPDATE_EVALUATION, DELETE_EVALUATION } from "./types";
import axios from "axios";

export const fetchEvaluations = () => dispatch => {
    axios.get("/evaluations/:userId")
    .then()
    .catch()
}

export const editEvaluation = () => dispatch => {
    axios.get("/evaluations/:userId/edit/:taskId")
    .then()
    .catch()
}

export const createEvaluation = () => dispatch => {

}

export const updateEvaluation = () => dispatch => {

}

export const deleteEvaluation = () => dispatch => {

}