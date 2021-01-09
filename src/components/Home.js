import React from "react";
import "../stylesheets/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import photoImg from "../assets/images/artist_photo.jpg";

const Home = (props) => {
  return (
    <div className={"content"} id={"home"}>
      <div>
        <Header />
        <section className="home-page-photo">
          <img src={photoImg} alt="Artist photo" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
