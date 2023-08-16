import React, { useState } from "react";
import timeBtn from "../assets/time.svg";
import textBtn from "../assets/text.svg";
import refreshBtn from "../assets/refresh.svg";
import copyBtn from "../assets/copy.svg";
import downloadBtn from "../assets/download.svg";
import PlayBar from "./PlayBar";
import SimpleDisplay from "./SimpleDisplay";
import TimedDisplay from "./TimedDisplay";

const ResultBox = ({ restart, color, archive }) => {
  const [displayType, setDisplayType] = useState("simple");
  return (
    <div
      className="
        h-full w-full
        grid grid-cols-1 grid-rows-[68fr_285fr_76fr] px-7
        
        "
    >
      <div
        className="
          h-full
          flex justify-between items-center 
          border-b border-[rgba(0,0,0,0.25)]
          "
      >
        <div
          className="
            h-full
            flex gap-5 items-center
            
            "
        >
          <button
            onClick={() => {
              restart(false);
            }}
            className={`
            flex justify-center items-center gap-2 px-3 py-2
            bg-${color} rounded-[20px]
            ${archive?"hidden":""}
            `}
          >
            <p className="text-white text-sm">شروع دوباره</p>
            <img src={refreshBtn} alt="refresh btn" />
          </button>
          <button className={archive?"hidden":""}>
            <img src={copyBtn} alt="copy btn" />
          </button>
          <button className={archive?"hidden":""}>
            <img src={downloadBtn} alt="download btn" />
          </button>
        </div>
        <div
          className="
            flex gap-7 h-full 
            "
        >
          <button
            onClick={() => {
              setDisplayType("timed");
            }}
            className={`
              flex justify-center items-center gap-2 p-2 border-black
              relative bottom-[-1px]
              ${displayType == "timed" ? "border-b" : "font-light "}
              `}
          >
            <p
              className={`
                
                `}
            >
              متن زمان‌بندی شده
            </p>
            <img
              src={timeBtn}
              alt="time icon"
              className={`${
                displayType == "timed" ? "" : "[filter:opacity(60%)]"
              }`}
            />
          </button>
          <button
            onClick={() => {
              setDisplayType("simple");
            }}
            className={`
              h-full
              flex justify-center items-center gap-2 p-2 border-black
              relative bottom-[-1px]
              ${displayType == "simple" ? "border-b" : "font-light "}
              `}
          >
            <p>متن ساده</p>
            <img
              src={textBtn}
              alt="text icon"
              className={`${
                displayType == "simple" ? "" : "[filter:opacity(60%)]"
              }`}
            />
          </button>
        </div>
      </div>
      <div className="py-8 [direction:rtl] font-light h-[30vh] overflow-scroll">
        {displayType == "simple" ? <SimpleDisplay /> : <TimedDisplay />}
      </div>
      <div className="flex justify-center items-center ">
        <PlayBar color={color}/>
      </div>
    </div>
  );
};

export default ResultBox;
