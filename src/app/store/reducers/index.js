import { combineReducers } from "redux";
import accountReducer from "./actions-creators/accountReducer";

const reducers = combineReducers({
  account: accountReducer,
});
export default reducers;
