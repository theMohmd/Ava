import React from "react";
import TimedDisplayElement from "./TimedDisplayElement";

const TimedDisplay = () => {
  const tst = [
    { id: 1,text: "one", startT: "00:00", endT: "00:02" },
    { id: 2,text: "two", startT: "00:00", endT: "00:02" },
    { id: 3,text: "three", startT: "00:00", endT: "00:02" },
    { id: 4,text: "four", startT: "00:00", endT: "00:02" },
    { id: 5,text: "four", startT: "00:00", endT: "00:02" },
    { id: 6,text: "four", startT: "00:00", endT: "00:02" },
  ];

  return (
    <div
      className={`
      [direction:rtl]
      overflow-scroll
      pl-4
      `}
    >
      {tst.map((item) => (
        <TimedDisplayElement 
          text={item.text}
          startT={item.startT}
          endT={item.endT}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default TimedDisplay;
