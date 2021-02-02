import React from "react";
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
              It has a soul-funk-swing vibe to it that is hard to stop listening
              to."
              <br />
              <br />
              <span className={"short-description-attribution"}>
                - The Cincinnati Music Critic
              </span>
            </p>
            <section className="subscribe-form">
              <form>
                <label for="email">Subscribe for updates</label>
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
          </div>
          <img
            src={"https://source.unsplash.com/random/600x400"}
            alt="Artist photo"
          />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
