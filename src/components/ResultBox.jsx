import React, { useEffect, useState } from "react";
import PlayBar from "./PlayBar";
import SimpleDisplay from "./SimpleDisplay";
import TimedDisplay from "./TimedDisplay";
import {
  CopyIcon,
  DownloadIcon,
  RefreshIcon,
  TextIcon,
  TimeIcon,
} from "../assets/Icons";

const ResultBox = ({ restart, color, archive, data }) => {
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
              restart("initial");
            }}
            className={`
            flex justify-center items-center gap-2 px-3 py-2
            bg-${color} rounded-[20px]
            ${archive ? "hidden" : ""}
            `}
          >
            <p className="text-white text-sm">شروع دوباره</p>
            <RefreshIcon />
          </button>
          <button
            className={`
            ${archive ? "hidden" : ""}
            h-6 w-6 
            flex justify-center items-center
            `}
          >
            <CopyIcon />
          </button>
          <button
            className={`
            ${archive ? "hidden" : ""}
            h-6 w-6 
            flex justify-center items-center
            `}
          >
            <DownloadIcon className="fill-[#8F8F8F]" />
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
                text-sm
                ${displayType !== "timed" ? "opacity-60" : null}
                `}
            >
              متن زمان‌بندی شده
            </p>
            <TimeIcon
              className={displayType !== "timed" ? "opacity-60" : null}
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
            <p
              className={`
                text-sm
                ${displayType !== "simple" ? "opacity-60" : null}
                `}
            >
              متن ساده
            </p>
            <TextIcon
              className={displayType !== "simple" ? "opacity-60" : null}
            />
          </button>
        </div>
      </div>
      <div className="py-8 [direction:rtl] font-light h-[30vh] overflow-scroll">
        {displayType == "simple" ? (
          <SimpleDisplay data={data} />
        ) : (
          <TimedDisplay data={data} />
        )}
      </div>
      <div className="flex justify-center items-center ">
        <PlayBar color={color} />
      </div>
    </div>
  );
};

export default ResultBox;
