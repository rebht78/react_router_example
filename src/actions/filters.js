export const setTextFilter = searchText => {
  return {
    type: "SET_TEXT_FILTER",
    searchText
  };
};
export const setSortBy = sortByText => {
  return {
    type: "SET_SORTBY",
    sortByText
  };
};
