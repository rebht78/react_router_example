import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter.routers";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { addUsers } from "./actions/users";
import { setTextFilter, setSortBy } from "./actions/filters.js";

import "./styles.css";
const store = configureStore();
store.dispatch(addUsers({ id: 1, name: "Sherlock", age: 33 }));
store.dispatch(addUsers({ id: 2, name: "Jim", age: 31 }));
store.dispatch(setTextFilter("Sherlock"));
store.dispatch(setSortBy("age"));
store.dispatch(setTextFilter("Jim"));
console.log(store.getState());
// setInterval(() => {
//   store.dispatch(addUsers({ id: 3, name: "Jane", age: 30 }));
// }, 2000);
const rootElement = document.getElementById("root");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, rootElement);
