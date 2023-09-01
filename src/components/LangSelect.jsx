import React, { useState } from "react";
import { DropIcon } from "../assets/Icons";
const LangSelect = ({ className, lang, setLang }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${className}
      flex justify-start items-center gap-3
      text-sm
      transition-all
      
      `}
    >
      <div
        className={`${className}
          border border-[#00BA9F] rounded-[20px]
          w-[105px] px-4 
          text-[#00BA9F]
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
          <DropIcon className={open ? "rotate-180" : ""} />
          <p className='relative bottom-[2px]'>
            {lang == "fa" ? "فارسی" : "انگلیسی"}
          </p>
        </button>
        <div className={open ? " delay-100" : "[visibility:hidden] "}>
          <button
            onClick={() => {
              lang == "fa" ? setLang("en") : setLang("fa");
              setOpen(!open);
            }}
            className='
            h-10 w-full 
            flex justify-center items-center gap-2
            border-t border-[#00BA9F]
            '
          >
            {lang != "fa" ? "فارسی" : "انگلیسی"}
          </button>
        </div>
      </div>

      <p className='[direction:rtl] text-sm self-start leading-10 text-[#626262] font-light'>
        زبان گفتار:
      </p>
    </div>
  );
};

export default LangSelect;
