import React, { useState } from "react";
import { DropIcon, LogoutIcon, UserIcon } from "../assets/Icons";
import { motion, spring } from "framer-motion";

const DropDown = ({ className }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <motion.div
    initial={{opacity:0, x:-30}}
    animate={{opacity:1, x:0}}
      className={`${className}
      border border-[#00BA9F] rounded-[20px]
      w-32 px-4 
      text-[#00BA9F] text-[15px]
      transition-[height]
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
    </motion.div>
  );
};

export default DropDown;
