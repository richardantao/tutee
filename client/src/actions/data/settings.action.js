import { LOADING_SETTINGS, 
    FETCH_PROFILE, UPDATE_PROFILE, 
    FETCH_PASSWORD, UPDATE_PASSWORD,
    FETCH_PREFERENCES, UPDATE_PREFERENCES,
    FETCH_INTEGRATIONS, CREATE_INTEGRATION, UPDATE_INTEGRATION, DELETE_INTEGRATION
} from "../types";
import { tokenConfig } from "../auth/auth.action";
import { returnErrors } from "../auth/errors.action";
import axios from "axios";

export const setLoading = () => {
    return {
        type: LOADING_SETTINGS
    };
};

export const fetchProfile = () => dispatch => {
    dispatch(setLoading());

    axios.get("/settings/profile")
    .then(res => dispatch({
        type: FETCH_PROFILE,
        payload: res.data.form
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateProfile = () => dispatch => {
    dispatch(setLoading());
    
    axios.put("setting/profile/update")
    .then(res => dispatch({
        type: UPDATE_PROFILE,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const fetchPassword = () => dispatch => {
    dispatch(setLoading());

    axios.get("/settings/password")
    .then(res => dispatch({
        type: FETCH_PASSWORD,
        payload: res.data.form
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updatePassword = () => dispatch => {
    dispatch(setLoading());

    axios.put("/settings/password/update")
    .then(res => dispatch({
        type: UPDATE_PASSWORD,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const fetchPreferences = () => dispatch => {
    dispatch(setLoading());

    axios.get("/settings/preferences")
    .then(res => dispatch({
        type: FETCH_PREFERENCES,
        payload: res.data.form
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updatePreferences = () => dispatch => {
    dispatch(setLoading());

    axios.put("/settings/preferences/update")
    .then(res => dispatch({
        type: UPDATE_PREFERENCES,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const fetchIntegrations = () => dispatch => {
    dispatch(setLoading());

    axios.get("/settings/integrations")
    .then(res => dispatch({
        type: FETCH_INTEGRATIONS,
        payload: res.data
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const editIntegration = id => dispatch => {
    dispatch(setLoading());

    axios.get(`/settings/integrations/edit/:${id}`)
    .then(res => dispatch({
        type: EDIT_INTEGRATION,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const createIntegrations = newIntegration => (dispatch, getState) => {
    dispatch(setLoading());

    axios.post("/settings/integrations/create", newIntegration, tokenConfig(getState))
    .then(res => dispatch({
        type: CREATE_INTEGRATION,
        payload: newIntegration
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const updateIntegration = id => dispatch => {
    dispatch(setLoading());

    axios.put(`/settings/integrations/update/:${id}`)
    .then(res => dispatch({
        type: UPDATE_INTEGRATION,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};

export const deleteIntegration = id => dispatch => {
    dispatch(setLoading());

    axios.delete(`/settings/integrations/delete/:${id}`)
    .then(res => dispatch({
        type: DELETE_INTEGRATION,
        payload
    }))
    .catch(err => dispatch(
        returnErrors(err.data, err.status)
    ));
};
