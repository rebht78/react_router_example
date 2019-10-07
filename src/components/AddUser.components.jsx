import React from "react";
import UserForm from "./UserForm.components";
import { addUsers } from "../actions/users";
import { connect } from "react-redux";
const AddUser = props => (
  <div>
    <UserForm
      onFormSubmit={user => {
        props.dispatch(addUsers(user));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddUser);
