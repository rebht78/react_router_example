const filterDefaultState = {
  text: "",
  sortBy: ""
};
const filtersReducers = (state = filterDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.searchText
      };
    case "SET_SORTBY":
      return {
        ...state,
        sortBy: action.sortByText
      };
    case "ADD_USER":
      return {
        ...state,
        from: "From Filters"
      };
    default:
      return state;
  }
};
export default filtersReducers;
