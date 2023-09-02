import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";

const SideBarButton = ({ className, src, text, to, delay }) => {
  const variant = {
    initial: { x: 50, opacity: 0 ,transition:{ delay: delay }},
    animate: { x: 0, opacity: 1 ,transition:{ delay: delay }},
  };
  return (
    <motion.div
      whileHover={{ scale: 1.05, transitionDelay: 0 }}
      variants={variant}
      initial='initial'
      animate='animate'
      
      className='
    w-full h-12
    '
    >
      <NavLink
        to={to}
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "#02816E" : "",
          };
        }}
        className={`${className}
        h-full w-full2
        rounded-[10px] text-center
        flex items-center justify-between px-4
        text-white font-bold
        `}
      >
        {text}
        {src}
      </NavLink>
    </motion.div>
  );
};

export default SideBarButton;
