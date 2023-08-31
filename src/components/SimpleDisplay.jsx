import React from "react";

const SimpleDisplay = ({ data }) => {
  return (
    <div>
      <p>{data.map((item) => item.text + " ")}</p>
    </div>
  );
};

export default SimpleDisplay;
