import React, { useState } from "react";
import ConvertBoxButton from "./ConvertBoxButton";
import RecordBox from "./RecordBox";
import UploadBox from "./UploadBox";
import LinkBox from "./LinkBox";
import { ChainIcon, MicIcon, UploadIcon } from "../assets/Icons";

const ConvertBox = ({ className, lang }) => {
  const [comp, setComp] = useState("record"); //record, upload, link
  return (
    <div
      className={`${className} 
      grid grid-rows-[2fr_17fr] grid-cols-1
      `}
    >
      <div
        className='
        flex flex-row-reverse gap-2
        '
      >
        <ConvertBoxButton
          className={comp == "record" ? "bg-green" : ""}
          onClick={() => {
            setComp("record");
          }}
          color='green'
          active={comp == "record"}
          Icon={MicIcon}
          text='ضبط صدا'
        />
        <ConvertBoxButton
          className={comp == "upload" ? "bg-blue" : ""}
          onClick={() => {
            setComp("upload");
          }}
          active={comp == "upload"}
          color='blue'
          Icon={UploadIcon}
          text='بارگذاری فایل'
        />
        <ConvertBoxButton
          className={comp == "link" ? "bg-red" : ""}
          onClick={() => {
            setComp("link");
          }}
          active={comp == "link"}
          color='red'
          Icon={ChainIcon}
          text='لینک'
        />
      </div>
      <div
        className={`
        border 
        ${
          comp == "record"
            ? "rounded-[25px_0_25px_25px] border-green"
            : "rounded-[25px_25px_25px_25px]"
        } 
        ${comp == "upload" ? "border-blue" : ""}
        ${comp == "link" ? "border-red" : ""}
        `}
      >
        {comp === "record" ? (
          <RecordBox lang={lang} />
        ) : comp === "upload" ? (
          <UploadBox lang={lang} />
        ) : (
          <LinkBox lang={lang} />
        )}
      </div>
    </div>
  );
};

export default ConvertBox;
