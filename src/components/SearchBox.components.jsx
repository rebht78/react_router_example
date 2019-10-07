import React from "react";
import { setTextFilter } from "../actions/filters";
import { connect } from "react-redux";

const SearchBox = props => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Search Value"
        value={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <p>State Filter is {props.filters.text}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};
const connectedSearchBox = connect(mapStateToProps)(SearchBox);

export default connectedSearchBox;
