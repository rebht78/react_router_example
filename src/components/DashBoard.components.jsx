import React from "react";
import User from "./User.components";
import SearchBox from "./SearchBox.components";
import showUsers from "../selectors/users";
import { connect } from "react-redux";
const DashBoard = props => {
  return (
    <div>
      <h2>Users List</h2>
      <SearchBox />
      {props.users.map(user => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: showUsers(state.users, state.filters)
  };
};
const connectedDashBoard = connect(mapStateToProps);
// return another function
// that function returns HOC
/*
Documents / Tutorials :
const connectedDashBoard = connect(state => {
  return {
    users: state.users
  })(DashBoard);

*/
export default connectedDashBoard(DashBoard);
