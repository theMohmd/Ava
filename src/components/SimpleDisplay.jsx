import { motion } from "framer-motion";
import React from "react";

const SimpleDisplay = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p>{data.map((item) => item.text + " ")}</p>
    </motion.div>
  );
};

export default SimpleDisplay;
