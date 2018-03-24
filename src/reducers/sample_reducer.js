import { LOAD_INIT_DATA } from "../actions/index";

export default function (state = {}, action) {
    
    switch (action.type) {
        case LOAD_INIT_DATA:
        console.log(action.payload);
            return action.payload.data;
        default:
            return state;
    }
}
