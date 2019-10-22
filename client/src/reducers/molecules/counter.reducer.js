import { COUNT_DATA } from "../../actions/types";

const initialState = {

};

export default (state = initialState, action) => {
    switch(action.type) {
        case COUNT_DATA:
            return {
                
            };
        default:
            return state;
    };
};