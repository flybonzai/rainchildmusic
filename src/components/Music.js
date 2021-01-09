import React from "react";
import Header from "./Header";
import "../stylesheets/Music.css";

const Music = (props) => {
  return (
    <div className={"content"} id={"music"}>
      <Header />
      <div className={"player"}>
        <iframe
          src="https://open.spotify.com/embed/album/4S8Th5kTs3NxIo8YVDkb7y"
          width="30%"
          height="60%"
          frameBorder="5"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
