import React, { useState } from "react";
import copyIcon from "../assets/copy.svg";
import downloadIcon from "../assets/download.svg";
import deleteIcon from "../assets/delete.svg";
import wordIcon from "../assets/word.svg";
import LinkIcon from "../assets/centerLinkBtn.svg";
import MicIcon from "../assets/centerMicBtn.svg";
import UploadIcon from "../assets/centerUploadBtn.svg";
import ResultBox from "./ResultBox";

const ArchiveFile = ({ type }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`
      grid grid-cols-[160fr_80fr_150fr_95fr_490fr_65fr] grid-rows-${expanded?"[1fr_6fr]":"1"}
      text-center justify-center items-center
      shadow-[1px_1px_5px_0px_rgba(0,0,0,0.05)]
      py-3 px-2 rounded-[10px]  border
      border-${!expanded ? "white" : type == "mic"? "green": type == "upload"? "blue" : type == "link" ? "red" : "border-white"}
      
      `}
      onClick={() => { setExpanded(!expanded) }}
    >
      <div className="grid grid-cols-4 justify-center items-center">
        <button
          className="
          h-2/3
          flex justify-center items-center group
          hover:bg-[#DC3545] rounded-full aspect-square
          "
        >
          <img
            src={deleteIcon}
            alt=""
            className="
            [filter:invert(50%)]
            group-hover:[filter:invert(0%)]
            "
          />
        </button>
        <button
          className="
          h-2/3 aspect-square
          flex justify-center items-center group
          "
        >
          <img
            src={copyIcon}
            alt=""
            className="
            group-hover:[filter:invert(50%)_sepia(61%)_saturate(731%)_hue-rotate(124deg)_brightness(96%)_contrast(101%)]
            "
          />
        </button>
        <button
          className="
          h-2/3 aspect-square
          flex justify-center items-center group
          "
        >
          <img
            src={wordIcon}
            alt=""
            className="
            group-hover:[filter:invert(50%)_sepia(61%)_saturate(731%)_hue-rotate(124deg)_brightness(96%)_contrast(101%)]
            "
          />
        </button>
        <button
          className="
          h-2/3 aspect-square
          flex justify-center items-center group
          "
        >
          <img
            src={downloadIcon}
            alt=""
            className="
            group-hover:[filter:invert(50%)_sepia(61%)_saturate(731%)_hue-rotate(124deg)_brightness(96%)_contrast(101%)]
            "
          />
        </button>
      </div>
      <p className="text-xs">4:29</p>
      <p className="text-xs">.mp4</p>
      <p className="text-xs">1400-08-20</p>
      <p>https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...</p>
      <div className="flex justify-center items-center" >
        <img
          width="32px"
          src={
            type == "mic" ? MicIcon : type == "upload" ? UploadIcon : LinkIcon
          }
          alt=""
        />
      </div>
      <div
        className={`
        h-full w-full
        row-start-2 col-start-1 row-end-3 col-end-7 
       
        ${expanded?"":"hidden"}
        `}
        
      >
        <ResultBox archive={true} color={type == "mic"? "green": type == "upload"? "blue" : "red"}/>
      </div>
    </div>
  );
};

export default ArchiveFile;
