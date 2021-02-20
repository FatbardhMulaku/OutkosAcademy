import { combineReducers } from "redux";
import bookReducer from "./books";
import langReducer from "./lang";

const rootReducer = combineReducers({
  shop: bookReducer,
  lang: langReducer,
});

export { rootReducer };
