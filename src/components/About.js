import React from "react";
import "../stylesheets/About.css";
import Header from "./Header";

const About = (props) => {
  return (
    <div className={"content"} id={"about"}>
      <Header />
      Hello from About
    </div>
  );
};

export default About;
