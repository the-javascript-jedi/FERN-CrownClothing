import { createStore, applyMiddleware, compose } from "redux";
// persistStore will cache our browser store
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middlewares = [logger]; //temporarily comment logger
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
// persistor - persisted version of our store
export const persistor = persistStore(store);
// export default { store, persistor };
