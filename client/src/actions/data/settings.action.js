import { GET_PROFILE, GET_PREFERENCES, GET_PASSWORD, GET_INTEGRATIONS} from "../types";
import axios from "axios";

export const getProfile = () => dispatch => {
    axios.get("/settings/profile")
    .then(res => dispatch({
        type: GET_PROFILE,
        payload: res.data.form
    }))
    .catch(err => dispatch({
        payload: err.message
    }));
};

export const getPassword = () => dispatch => {
    axios.get("/settings/password")
    .then(res => dispatch({
        type: GET_PASSWORD,
        payload: res.data.form
    }))
    .catch(err => dispatch({
        payload: err.message
    }));
};

export const getPreferences = () => dispatch => {
    axios.get("/settings/preferences")
    .then(res => dispatch({
        type: GET_PREFERENCES,
        payload: res.data.form
    }))
    .catch(err => dispatch({
        payload: err.message
    }));
};

export const getIntegrations = () => dispatch => {
    axios.get("/settings/integrations")
    .then(res => dispatch({
        type: GET_INTEGRATIONS,
        payload: res.data.form
    }))
    .catch(err => dispatch({
        payload: err.message
    }));
};

