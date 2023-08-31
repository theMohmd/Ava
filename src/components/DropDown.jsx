import React, { useState } from "react";
import { DropIcon, LogoutIcon, UserIcon } from "../assets/Icons";

const DropDown = ({ className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${className}
      border border-[#00BA9F] rounded-[20px]
      w-32 px-4 
      text-[#00BA9F] text-[15px]
      transition-all
      ${open ? "h-20" : "h-10"}
      `}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className='
        h-10 w-full 
        flex justify-center items-center gap-2
        '
      >
        <DropIcon className={open ? "rotate-180" : null} />
        <p className='relative bottom-[2px]'>مهمان</p>
        <UserIcon />
      </button>
      <div className={`${open ? " delay-100" : "[visibility:hidden] "}  `}>
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className='
        h-10 w-full 
        flex justify-center items-center gap-2
        border-t border-[#00BA9F]
        '
        >
          <p className='relative bottom-[2px]'>خروج</p>
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};

export default DropDown;
