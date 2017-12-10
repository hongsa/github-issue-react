import { combineReducers } from "redux";

import issues from "./issues";
import issueDetail from "./issueDetail";

const rootReducer = combineReducers({
  issues,
  issueDetail
});

export default rootReducer;
