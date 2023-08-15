import React, { useState } from "react";

import micIcon from "../assets/mic.svg";
import uploadIcon from "../assets/upload.svg";
import chainIcon from "../assets/chain.svg";
import ConvertBoxButton from "./ConvertBoxButton";

import RecordBox from "./RecordBox";
import UploadBox from "./UploadBox";
import LinkBox from "./LinkBox";

const ConvertBox = ({ className }) => {
  const [comp, setComp] = useState(1);
  const componentSelect = (comp) => {
    switch (comp) {
      case 1:
        return <RecordBox />;

      case 2:
        return <UploadBox />;

      default:
        return <LinkBox />;
    }
  };
  return (
    <div
      className={`${className} 
      grid grid-rows-[2fr_17fr] grid-cols-1
      `}
    >
      <div
        className="
        flex flex-row-reverse gap-2
        "
      >
        <ConvertBoxButton
          className={comp == 1 ? "bg-green" : ""}
          onClick={() => {
            setComp(1);
          }}
          color="green"
          active={comp == 1}
          src={micIcon}
          text="ضبط صدا"
        />
        <ConvertBoxButton
          className={comp == 2 ? "bg-blue" : ""}
          onClick={() => {
            setComp(2);
          }}
          active={comp == 2}
          color="blue"
          src={uploadIcon}
          text="بارگذاری فایل"
        />
        <ConvertBoxButton
          className={comp == 3 ? "bg-red" : ""}
          onClick={() => {
            setComp(3);
          }}
          active={comp == 3}
          color="red"
          src={chainIcon}
          text="لینک"
        />
      </div>
      <div
        className={`
        border 
        ${
          comp == 1
            ? "rounded-[25px_0_25px_25px] border-green"
            : "rounded-[25px_25px_25px_25px]"
        } 
        ${comp == 2 ? "border-blue" : ""}
        ${comp == 3 ? "border-red" : ""}
        `}
      >
        {componentSelect(comp)}
      </div>
    </div>
  );
};

export default ConvertBox;
