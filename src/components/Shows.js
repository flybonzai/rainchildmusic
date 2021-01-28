import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Show from "./Show";
import ShowsData from "../data/ShowsData";
import "../stylesheets/Shows.css";

// TODO use table for display
const Shows = (props) => {
  const createShows = (shows) => {
    return shows.map((show) => <Show key={show.id} showData={show} />);
  };

  return (
    <div className={"content"} id={"shows"}>
      <Header />
      <section className={"shows"}>
        <table className="shows-table">
          <thead>
            <tr>
              <th scope="col" colSpan={3}>Upcoming</th>
            </tr>
          </thead>
          <tbody>
            {createShows(ShowsData.shows)}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
};

export default Shows;
