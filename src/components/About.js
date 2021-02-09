import React from "react";
import "../stylesheets/About.css";
import Header from "./Header";
import Footer from "./Footer";

const About = (props) => {
  return (
    <div className={"content"} id={"about"}>
      <Header />
      <article className="about">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <Footer />
    </div>
  );
};

export default About;
