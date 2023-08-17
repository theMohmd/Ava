import React from "react";

const SimpleDisplay = ({ data }) => {
  return (
    <div>
      <p>{data[0].segments.map((item, index) => item.text + " ")}</p>
    </div>
  );
};

export default SimpleDisplay;
