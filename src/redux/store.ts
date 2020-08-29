import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import balanceReducer from "./SetBalance/SetBalanceReducer";
import operationsReducer from "./Operations/operationsReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  balance: balanceReducer,
  operations: operationsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
