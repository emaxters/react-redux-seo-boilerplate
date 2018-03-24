import { combineReducers } from "redux";
import SampleReducer from "./sample_reducer";

const rootReducer = combineReducers({
    data: SampleReducer
});

export default rootReducer;
