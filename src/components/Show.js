import React from "react";

const Show = (props) => {
  const showData = props.showData;
  const className = `show-${showData.id}`;

  return (
    <tr className={className}>
      <td>{showData.date}</td>
      <td>{showData.description}</td>
    </tr>
  );
};

export default Show;