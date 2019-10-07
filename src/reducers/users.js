const usersReducers = (state = [], action) => {
  switch (action.type) {
    case "ADD_USER":
      //return state.concat(action.user);
      return [...state, action.user];
    default:
      return state;
  }
};

export default usersReducers;
