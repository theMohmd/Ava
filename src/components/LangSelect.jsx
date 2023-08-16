import React, { useState } from "react";
import { DropIcon } from "../assets/Icons";
const LangSelect = ({ className }) => {
  const [lang, setLang] = useState("fa");
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${className}
      h-auto
      flex justify-start items-center gap-3
      
      `}
    >
      <div
        className={`${className}
          border border-[#00BA9F] rounded-[20px]
          h-auto w-[105px] px-4 
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
          <DropIcon className={open ? "rotate-180" : ""}/>
          <p className="relative bottom-[2px]">
            {lang == "fa" ? "فارسی" : "انگلیسی"}
          </p>
        </button>
        <div className={open ? "" : "hidden"}>
          <button
            onClick={() => {
              lang == "fa" ? setLang("en") : setLang("fa")
              setOpen(!open);
            }}
            className="
            h-10 w-full 
            flex justify-center items-center gap-2
            border-t border-[#00BA9F]
            "
          >
            {lang != "fa" ? "فارسی" : "انگلیسی"}
          </button>
        </div>
      </div>

      <p className="[direction:rtl] text-sm self-start leading-10 text-[#626262] font-light">زبان گفتار:</p>
    </div>
  );
};

export default LangSelect;
