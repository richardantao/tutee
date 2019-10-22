import { GET_PROFILE, GET_PASSWORD, GET_PREFERENCES, GET_INTEGRATIONS } from "../actions/types";

const initialState = {
    form: ""
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_PROFILE:
            return {
                form: "profile"
            };
        case GET_PASSWORD:
            return {    
                form: "password"
            };
        case GET_PREFERENCES:
            return {
                form: "preferences"
            };
        case GET_INTEGRATIONS:
            return {
                form: "integrations"
            };
        default: 
            return state;
    }
}