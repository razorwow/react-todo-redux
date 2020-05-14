import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { postsReducer } from "./posts/reducers";
import { usersReducer } from "./users/reducers";
import { userReducer } from "./user/reducers.js";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const rootReducer = combineReducers({
  postsReducer,
  usersReducer,
  userReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
