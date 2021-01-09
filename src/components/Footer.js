import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../stylesheets/Footer.css";

const Footer = (props) => {
  return (
    <footer className={"footer"}>
      <div className={"social-media-links"}>
        <FontAwesomeIcon
          className={"link-icon"}
          icon={faFacebook}
          size={"3x"}
          color={"white"}
        />
        <FontAwesomeIcon
          className={"link-icon"}
          icon={faTwitterSquare}
          size={"3x"}
          color={"white"}
        />
      </div>
    </footer>
  );
};

export default Footer;
