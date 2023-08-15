import React, { useState } from "react";
import userIcon from "../assets/user.svg";
import dropIcon from "../assets/drop.svg";
import logoutIcon from "../assets/logout.svg";

const DropDown = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${className}
      border border-[#00BA9F] rounded-[20px]
      h-auto w-32 px-4 
      text-[#00BA9F]
      `}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="
        h-10 w-full 
        flex justify-center items-center gap-2
        "
      >
        <img src={dropIcon} alt="drop icon" className={open ? "rotate-180" : ""} />
        <p className="relative bottom-[2px]">مهمان</p>
        <img src={userIcon} alt="user icon" />
      </button>
      <div className={open ? "" : "hidden"}>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="
        h-10 w-full 
        flex justify-center items-center gap-2
        border-t border-[#00BA9F]
        "
        >
          <p className="relative bottom-[2px]">خروج</p>
          <img src={logoutIcon} alt="logout icon" />
        </button>
      </div>
    </div>
  );
};

export default DropDown;
