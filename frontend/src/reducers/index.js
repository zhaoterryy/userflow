import { combineReducers } from "redux";
import alert from "./alert";
//store and reducers are now working to support ReduxDevTools

export default combineReducers({
  alert,
});
