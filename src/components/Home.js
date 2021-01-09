import React from "react";
import "../stylesheets/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import photoImg from "../assets/images/artist_photo.jpg";

// TODO split out additional components
// make all class names lowercase with hyphens
// Add semantic elements
const Home = (props) => {
  return (
    <div className={"Content"} id={"Home"}>
      <Header />
      <section className="ArtistPhotoAndDesc">
        <div className="ArtistShortDesc">
          A shirtful of sand, and organs created from stone...
          <br />
          <br />
          Here's to finding a way back home
          <br />
          <br />
          - <em>Bones</em>
        </div>
        <img src={photoImg} alt="Artist photo" />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
