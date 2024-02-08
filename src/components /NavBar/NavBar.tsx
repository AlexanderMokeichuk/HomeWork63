import React from "react";
import {NavLink} from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <nav className={"navbar"}>
      <ul className="navbar-nav d-flex flex-row gap-2">
        <li className="nav-item">
          <NavLink className="nav-link" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/new-post"}>Add</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/contacts"}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;