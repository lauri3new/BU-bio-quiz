import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import Reducer from "./reducers/index";
// import { loadState, saveState } from "./localStorage.js";

// configureStore creates store from root reducer, persistedState allows state
// to be stored in browser local storage, applying middleware logger (for dev)
// and thunk (allows asynchronous actions i.e AJAX)

const configureStore = () => {
//  const persistedState = loadState();
  const store = createStore(
    Reducer,
//    persistedState,
    applyMiddleware(logger())
  );
  // store.subscribe(() => {
  //   saveState({
  //     questions: store.getState().questions,
  // })});

  return store;
};

export default configureStore;
