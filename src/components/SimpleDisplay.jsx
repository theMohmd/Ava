import React from "react";

const SimpleDisplay = ({ data }) => {
  return (
    <div>
      <p>{data.map((item, index) => item.text + " ")}</p>
    </div>
  );
};

export default SimpleDisplay;
