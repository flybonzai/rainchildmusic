import React from "react";
import Navbar from "./Navbar";
import "../stylesheets/Header.css";

const Header = (props) => {
  return (
    <header className={"header"}>
      <div className={"logo"}>
        <span>RAINCHILD</span>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
