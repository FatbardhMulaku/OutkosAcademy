import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { rootReducer } from "./reducers/rootReducer";
/* import { composeWithDevTools } from "redux-devtools-extension */

const persistConfig = {
	key: "root",
	storage,
	whitelist: [ "lang"],
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };