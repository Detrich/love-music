import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";


// export * from "./auth";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    // auth: combineReducers(authReducers)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production"
});

// store.subscribe(() => {
//   localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
// });
