import React, { useState } from "react";
import PlayBar from "./PlayBar";
import SimpleDisplay from "./SimpleDisplay";
import TimedDisplay from "./TimedDisplay";
import ReactLoading from "react-loading";
import {
  CopyIcon,
  DownloadIcon,
  RefreshIcon,
  TextIcon,
  TimeIcon,
} from "../assets/Icons";
import { motion } from "framer-motion";
const colors = {
  blue: "#118AD3",
  green: "#00BA9F",
  red: "#FF1654",
};
const ResultBox = ({ restart, color, archive = false, data }) => {
  const [displayType, setDisplayType] = useState("simple");
  const copyAction = () => {
    var text = "";
    data[0].segments.forEach((element) => {
      text += element.text + " ";
    });
    navigator.clipboard.writeText(text);
  };
  if (data) {
    return (
      <motion.div
        className='
        h-full w-full
        grid grid-cols-1 grid-rows-[68fr_285fr_76fr] px-7
        '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* top controls */}
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                restart("initial");
              }}
              className={`
              flex justify-center items-center gap-2 px-3 py-2
              bg-${color} rounded-[20px]
              ${archive ? "hidden" : ""}
              `}
            >
              <p className='text-white text-sm'>شروع دوباره</p>
              <RefreshIcon />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`
            ${archive ? "hidden" : ""}
            h-6 w-6 
            flex justify-center items-center
            `}
              onClick={copyAction}
            >
              <CopyIcon className='fill-[#8F8F8F]' />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`
            ${archive ? "hidden" : ""}
            h-6 w-6 
            flex justify-center items-center
            `}
            >
              <DownloadIcon className='fill-[#8F8F8F]' />
            </motion.button>
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

        {/* data display */}
        <div className='py-8 [direction:rtl] font-light h-[30vh] overflow-y-auto'>
          {displayType == "simple" ? (
            <SimpleDisplay data={data[0].segments} />
          ) : (
            <TimedDisplay data={data[0].segments} />
          )}
        </div>

        {/* play bar */}
        <div className='flex justify-center items-center '>
          <PlayBar
            color={color}
            url={data[0].media_url}
            duration={data[0].duration}
          />
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className='
        h-full w-full
        flex justify-center items-center
        '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ReactLoading type={"spin"} color={colors["color"]} />
      </motion.div>
    );
  }
};

export default ResultBox;
