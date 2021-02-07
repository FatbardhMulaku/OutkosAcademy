import { combineReducers } from "redux";

import bookReducer from "./books";

const rootReducer = combineReducers({
	shop: bookReducer,
});

export default rootReducer;