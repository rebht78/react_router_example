import React from "react";

class UserForm extends React.Component {
  state = {
    name: "",
    age: "",
    error: ""
  };
  onNameChange = e => {
    this.setState({ name: e.target.value });
  };
  onAgeChange = e => {
    const age = e.target.value;
    if (age.match(/^\d*$/)) {
      this.setState({ age });
    }
  };
  onFormSubmit = e => {
    e.preventDefault();

    if (!this.state.name || !this.state.age) {
      this.setState({ error: "Please provide required fields" });
    } else {
      this.setState({ error: "" });
      this.props.onFormSubmit({
        name: this.state.name,
        age: this.state.age
      });
    }
  };
  render() {
    return (
      <>
        <p>{this.state.error && this.state.error}</p>

        <form onSubmit={this.onFormSubmit}>
          Name:
          <input
            value={this.state.name}
            type="text"
            placeholder="Enter your name"
            onChange={this.onNameChange}
          />
          Age:
          <input
            value={this.state.age}
            onChange={this.onAgeChange}
            type="text"
          />
          <button>Add User</button>
        </form>
      </>
    );
  }
}

export default UserForm;
