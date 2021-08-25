import { combineReducers } from "redux";

import settingsReducer from "./settingsReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  settings: settingsReducer,
  tasks: tasksReducer,
});
