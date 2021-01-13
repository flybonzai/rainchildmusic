import React from "react";

const Show = (props) => {
  const showData = props.showData;
  const className = `show-${showData.id}`;

  return (
    <article className={className}>
      <p>{showData.date}</p>
      <p>{showData.title}</p>
      <p>{showData.content}</p>
    </article>
  );
};

export default Show;