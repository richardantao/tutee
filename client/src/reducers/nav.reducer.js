import { ACTIVE_VIEW } from "../actions/types";

const initialState = {
    active: "dashboard"
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ACTIVE_VIEW:
            return {
                
            }
        default: 
            return state;
    }
}
