import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { App } from "./components/app";
import { reducers } from "./reducers";
//https://jsonplaceholder.typicode.com/todos
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
