import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Show from "./Show";
import ShowsData from "../data/ShowsData";

// TODO use table for display
const Shows = (props) => {
  const createShows = (shows) => {
    return shows.map(show => <Show key={show.id} showData={show} />);
  };

  return (
    <div className={"content"} id={"shows"}>
      <Header />
      <section className={"shows"}>
        {createShows(ShowsData.shows)}
      </section>
      <Footer />
    </div>
  );
};

export default Shows;
