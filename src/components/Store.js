import React from "react";
import Header from "./Header";

// TODO add random store items using https://source.unsplash.com/random/{resolution} for image
const Store = (props) => {
  return (
    <div className={"content"} id={"store"}>
      <Header />
      Hello from Store
    </div>
  );
};

export default Store;
