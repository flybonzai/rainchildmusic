import React from "react";
import Navbar from "./Navbar";
import '../stylesheets/Header.css';

const Header = (props) => {
  return (
    <div className={"Header"}>
      <div className={"Logo"}><span>RAINCHILD</span></div>
      <Navbar />
    </div>
  );
};

export default Header;