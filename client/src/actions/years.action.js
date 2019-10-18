import { LOADING_YEARS, FETCH_YEARS, EDIT_YEAR, CREATE_YEAR, UPDATE_YEAR, DELETE_YEAR } from "./types";
import axios from "axios";

export const fetchYears = () => dispatch => {
    axios.get("/courses/:userId")
    .then()
    .catch()
}

export const editYear = () => dispatch => {
    axios.get("/courses/:userId/years/edit/:yearId")
    .then()
    .catch()
}

export const createYear = () => dispatch => {
    axios.post("/courses/:userId/years/create")
    .then()
    .catch()
}

export const updateYears = () => dispatch => {
    axios.put("/courses/:userId/years/update/:yearId")
    .then()
    .catch()
}

export const deleteYears = () => dispatch => {
    axios.delete("/courses/:userId/years/delete/:yearId")
    .then()
    .catch()
}
