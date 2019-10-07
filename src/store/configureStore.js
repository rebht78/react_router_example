import { createStore, combineReducers } from "redux";
import usersReducers from "../reducers/users.js";
import filtersReducers from "../reducers/filters.js";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      users: usersReducers,
      filters: filtersReducers
    }),
  );
  return store;
};

export default configureStore;
