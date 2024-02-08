import React from "react";
import NavBar from "../NavBar/NavBar";

const Header: React.FC = () => {
  return (
    <header className={"bg-primary"}>
      <div className={"container d-flex justify-content-between align-items-center"}>
        <div>
          <strong>HomeWork</strong>
        </div>
        <NavBar/>
      </div>
    </header>
  );
};

export default Header;