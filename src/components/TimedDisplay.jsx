import React from "react";
import TimedDisplayElement from "./TimedDisplayElement";

const TimedDisplay = ({ data }) => {
 

  return (
    <div
      className={`
      [direction:rtl]
      pl-4
      `}
    >
      {data[0].segments.map((item, index) => (
        <TimedDisplayElement
          text={item.text}
          startT={item.start}
          endT={item.end}
          key={index}
        />
      ))}
    </div>
  );
};

export default TimedDisplay;
