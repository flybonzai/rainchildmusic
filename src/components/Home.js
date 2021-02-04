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
          <img src={rockerPhoto} alt="Artist photo" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
