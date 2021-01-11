import React from "react";

const BlogItem = (props) => {
  const blogData = props.blogData;
  const className = `blog-${blogData.id}`;

  return (
    <article className={className}>
      <p>{blogData.date}</p>
      <p>{blogData.title}</p>
      <p>{blogData.content}</p>
    </article>
  );
};

export default BlogItem;