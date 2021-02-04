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
      <section className="subscribe-form">
        <form>
          <label htmlFor="email">Subscribe for updates</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="Email"
            formMethod="post"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
      <section className={"links"}>
        <nav className={"social-media-links"}>
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
        </nav>
      <div className={"copyright-info"}>&copy; Rainchild Music 2020</div>
      </section>
    </footer>
  );
};

export default Footer;
