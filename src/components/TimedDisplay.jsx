import React from "react";
import TimedDisplayElement from "./TimedDisplayElement";
import { motion } from "framer-motion";

const TimedDisplay = ({ data }) => {
  return (
    <motion.div
      className={`
      [direction:rtl]
      pl-4
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {data.map((item, index) => (
        <TimedDisplayElement
          text={item.text}
          startT={item.start}
          endT={item.end}
          key={index}
        />
      ))}
    </motion.div>
  );
};

export default TimedDisplay;
