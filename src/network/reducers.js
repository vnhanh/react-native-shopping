import { combineReducers } from "redux";
import loginReducer from "./login/LoginReducer";

const allReducers = combineReducers({
  loginReducer,
});

export default allReducers;
