import React, { useState } from "react";
import ConvertBoxButton from "./ConvertBoxButton";
import RecordBox from "./RecordBox";
import UploadBox from "./UploadBox";
import LinkBox from "./LinkBox";
import { ChainIcon, MicIcon, UploadIcon } from "../assets/Icons";

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
          Icon={MicIcon}
          text="ضبط صدا"
        />
        <ConvertBoxButton
          className={comp == 2 ? "bg-blue" : ""}
          onClick={() => {
            setComp(2);
          }}
          active={comp == 2}
          color="blue"
          Icon={UploadIcon}
          text="بارگذاری فایل"
        />
        <ConvertBoxButton
          className={comp == 3 ? "bg-red" : ""}
          onClick={() => {
            setComp(3);
          }}
          active={comp == 3}
          color="red"
          Icon={ChainIcon}
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
