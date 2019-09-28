import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h1>Lovely Application</h1>
    <div className="ui four item menu">
      <NavLink activeClassName="active" className="item" to="/" exact={true}>
        Home
      </NavLink>
      <NavLink activeClassName="active" className="item" to="/create">
        Add Something
      </NavLink>
      <NavLink activeClassName="active" className="item" to="/edit">
        Edit Something
      </NavLink>
      <NavLink activeClassName="active" className="item" to="/help">
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
