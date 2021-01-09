import React from "react";
import Header from "./Header";
import Blogs from "../data/Blogs";

const Blog = (props) => {
  return (
    <div className={"content"} id={"blog"}>
      <Header />
      Hello from Blog
    </div>
  );
};

export default Blog;
