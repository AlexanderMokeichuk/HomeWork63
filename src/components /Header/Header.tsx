import React from "react";
import NavBar from "../NavBar/NavBar";
import {Link} from "react-router-dom";
import {LOGO_STYLE} from "../../constants";


const Header: React.FC = () => {

  return (
    <header>
      <div className={"container bg-dark rounded-1 d-flex justify-content-between align-items-center"}>
        <Link to={"/"} style={LOGO_STYLE}></Link>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;