import { combineReducers } from "redux";
import { authReducer } from "./authReducer";

export const allReducer = combineReducers({
    auth: authReducer
})