import { rootReducer } from "./reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);
export default store;
