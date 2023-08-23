import React from "react";
import { NavLink } from "react-router-dom";

const SideBarButton = ({className, src, text, to}) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => {
        return {
          backgroundColor: isActive ? "#02816E" : "",
        };
      }}
      className={`${className}
      w-full h-12
      rounded-[10px] text-center
      flex items-center justify-between px-4
      text-white font-bold
      `}
    >
      {text}
      {src}
    </NavLink>
  );
};

export default SideBarButton;
