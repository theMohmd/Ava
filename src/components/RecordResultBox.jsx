import React, { useState } from "react";

import SimpleDisplay from "./SimpleDisplay";
import TimedDisplay from "./TimedDisplay";

import ReactLoading from "react-loading";
import {
  CopyIcon,
  DownloadIcon,
  RefreshIcon,
  StopIcon,
  TextIcon,
  TimeIcon,
} from "../assets/Icons";

const RecordResultBox = ({ restart, color, data, stop, state }) => {
  const [displayType, setDisplayType] = useState("simple");

  if (data) {
    return (
      <div
        className='
        h-full w-full
        grid grid-cols-1 grid-rows-[68fr_360fr] px-7
        '
      >
        <div
          className='
          h-full
          flex justify-between items-center 
          border-b border-[rgba(0,0,0,0.25)]
          '
        >
          <div
            className='
            h-full
            flex gap-5 items-center
            
            '
          >
            {state === "recording" && (
              <button
                className={`
                flex justify-center items-center gap-2 
                bg-red rounded-[20px]
                aspect-square h-8 relative p-1 
                `}
                onClick={stop}
                disabled={state !== "recording"}
              >
                {state === "recording" ? (
                  <span className='h-full w-full bg-red animate-ping rounded-full absolute top-0 left-0' />
                ) : null}

                <StopIcon className='stroke-white fill-none' />
              </button>
            )}
            <button
              onClick={() => {
                restart("initial");
              }}
              className={`
              flex justify-center items-center gap-2 px-3 py-2
              bg-${color} rounded-[20px]
              
              `}
            >
              <p className='text-white text-sm'>شروع دوباره</p>
              <RefreshIcon />
            </button>
            <button
              className={`
              h-6 w-6 
              flex justify-center items-center
              `}
            >
              <CopyIcon className='fill-[#8F8F8F]' />
            </button>
            <button
              className={`
              h-6 w-6 
              flex justify-center items-center
              `}
            >
              <DownloadIcon className='fill-[#8F8F8F]' />
            </button>
          </div>
          <div
            className='
            flex gap-7 h-full 
            '
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

        <div className='py-8 [direction:rtl] font-light h-[30vh] overflow-y-auto'>
          {displayType == "simple" ? (
            <SimpleDisplay data={data} />
          ) : (
            <TimedDisplay data={data} />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='
      h-full w-full
      flex justify-center items-center
      '
      >
        <ReactLoading type={"spin"} color={"#00BA9F"} />
      </div>
    );
  }
};

export default RecordResultBox;
