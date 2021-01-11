import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import BlogItem from "./BlogItem";
import Blogs from "../data/Blogs";

const Blog = (props) => {
  const createBlogs = (blogs) => {
    return blogs.map(blog => <BlogItem key={blog.id} blogData={blog} />);
  };

  return (
    <div className={"content"} id={"blog"}>
      <Header />
      <section className={"blogs"}>
        {createBlogs(Blogs.blogs)}
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
