import React from "react";
import { Link, NavLink } from "react-router-dom";

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
      flex items-center justify-evenly
      text-white font-bold
      `}
    >
      {text}
      <img src={src} alt="" className="group-[.active]:bg-red"/>
    </NavLink>
  );
};

export default SideBarButton;
