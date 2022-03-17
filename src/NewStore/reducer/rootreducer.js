import { combineReducers } from "redux";
import { loginReduycer } from "./ActionReducer";

const rootreducer = combineReducers({
    longin :loginReduycer,
})
export default rootreducer