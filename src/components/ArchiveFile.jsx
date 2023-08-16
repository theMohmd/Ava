import React, { useState } from "react";
import ResultBox from "./ResultBox";
import {
  MicIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  WordIcon,
  ChainIcon,
  UploadIcon,
} from "../assets/Icons";

const ArchiveFile = ({ type }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`
      grid grid-cols-[2fr_11fr] grid-rows-${expanded ? "[1fr_6fr]" : "1"}
      text-center justify-center items-center
      shadow-[1px_1px_5px_0px_rgba(0,0,0,0.05)]
      py-3 px-2 rounded-[10px]  border
      border-${
        !expanded
          ? "white"
          : type === "record"
          ? "green"
          : type === "upload"
          ? "blue"
          : type === "link"
          ? "red"
          : "border-white"
      }
      
      `}
    >
      <div className="grid grid-cols-4 justify-center items-center ">
        <button
          className="
          h-8 aspect-square
          flex justify-center items-center
          hover:bg-[#DC3545] rounded-full 
          "
        >
          <DeleteIcon className="p-2 h-full w-full hover:stroke-white" />
        </button>
        <button
          className="
          h-8 aspect-square
          flex justify-center items-center group
          "
        >
          <CopyIcon className="h-full w-full p-2 fill-[#8F8F8F] hover:fill-green" />
        </button>
        <button
          className="
          h-8 aspect-square
          flex justify-center items-center group
          "
        >
          <WordIcon className="h-full w-full p-[7px] fill-[#8F8F8F] hover:fill-green" />
        </button>
        <button
          className="
          h-8 aspect-square
          flex justify-center items-center group
          "
          title="۳.۲ مگابایت"
        >
          <DownloadIcon className="h-full w-full p-2 fill-[#8F8F8F] hover:fill-green" />
        </button>
      </div>
      <button
        className="
        grid grid-cols-[80fr_150fr_95fr_490fr_65fr] 
        text-center justify-center items-center
        "
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <p className="text-xs font-iranSans">4:29</p>
        <p className="text-xs">.mp4</p>
        <p className="text-xs font-iranSans">1400-08-20</p>
        <p>https://irsv.upmusics.com/Downloads/Musics/Sirvan%20K ...</p>
        <div
          className={`
          flex justify-center items-center
          h-8 aspect-square rounded-full
          ${
            type === "record"
              ? "bg-green"
              : type === "upload"
              ? "bg-blue"
              : type === "link"
              ? "bg-red"
              : null
          }
          `}
        >
          {type === "record" ? (
            <MicIcon />
          ) : type === "upload" ? (
            <UploadIcon />
          ) : type === "link" ? (
            <ChainIcon />
          ) : null}
        </div>
      </button>
      <div
        className={`
        h-full w-full
        row-start-2 col-start-1 row-end-3 col-end-[-1]
       
        ${expanded ? "" : "hidden"}
        `}
      >
        <ResultBox
          archive={true}
          color={type == "record" ? "green" : type == "upload" ? "blue" : "red"}
        />
      </div>
    </div>
  );
};

export default ArchiveFile;
