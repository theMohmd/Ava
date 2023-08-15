import React from "react";
import ArchiveFile from "./ArchiveFile";
import leftIcon from "../assets/left.svg";
import rightIcon from "../assets/right.svg";
const Archive = () => {
  return (
    <div
      className="
      pr-40 pl-32 py-24
      grid grid-cols-1 grid-rows-[1fr_10fr]
      "
    >
      <h1 className="[direction:rtl] text-2xl text-green ">آرشیو من</h1>
      <div
        className="
        w-full h-full
        grid grid-cols-1 grid-rows-[7fr_54fr_10fr]
        "
      >
        <div
          className="
          grid grid-cols-[160fr_80fr_150fr_95fr_390fr_100fr_65fr] grid-rows-1
          justify-center items-center text-center
          "
        >
          <p className="text-sm [direction:rtl] col-start-2 ">نوع فایل</p>
          <p className="text-sm [direction:rtl] col-start-3 ">نوع فایل</p>
          <p className="text-sm [direction:rtl] col-start-4 ">تاریخ بارگذاری</p>
          <p className="text-sm [direction:rtl] col-start-6 ">نام فایل</p>
        </div>
        <div className="pl-2 gap-2 flex flex-col overflow-scroll max-h-[60vh] [direction:rtl] [&>*]:[direction:ltr]">
          <ArchiveFile type="mic" />
          <ArchiveFile type="link" />
          <ArchiveFile type="upload" />
          <ArchiveFile type="mic" />
          <ArchiveFile type="mic" />
          <ArchiveFile type="link" />
          <ArchiveFile type="upload" />
          <ArchiveFile type="mic" />
          <ArchiveFile type="mic" />
          <ArchiveFile type="link" />
          <ArchiveFile type="upload" />
          <ArchiveFile type="mic" />
        </div>
        <div
          className={`
            flex justify-center items-center
            [&>*]:aspect-square  gap-1 px-56 py-5
            [&>*]:rounded-full font-iranSans [&>*]:h-8
          `}
        >
          <button className="flex justify-center items-center">
            <img src={leftIcon} alt="" />
          </button>
          <button>365</button>
          <div className="flex justify-center items-center">
            <p>...</p>
          </div>
          <button>126</button>
          <button>125</button>
          <button className="bg-green text-white">124</button>
          <button>123</button>
          <div className="flex justify-center items-center">
            <p>...</p>
          </div>
          <button>1</button>
          <button className="flex justify-center items-center">
            <img src={rightIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Archive;
