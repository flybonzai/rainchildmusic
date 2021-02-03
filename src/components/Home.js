import React from "react";
import rockerPhoto from "../assets/images/rocker.jpg";
import "../stylesheets/Home.css";
import Header from "./Header";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <div className={"content"} id={"home"}>
      <div>
        <Header />
        <section className="home-page-photo">
          <div className={"home-page-content"}>
            <p className={"short-description-text"}>
              "Their music sounds like the heavens parted and God sent down his
              angels in melodious form.
              <br />
              <br />
              <span className={"short-description-attribution"}>
                - The Cincinnati Music Critic
              </span>
            </p>
          </div>
          <img src={rockerPhoto} alt="Artist photo" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
