import React from "react";
import SideBarButton from "./SideBarButton";
import { ArchiveIcon, LogoIcon, SpeechIcon } from "../assets/Icons";


const SideBar = () => {
  return (
    <div
      className="
      side-gradient rounded-[10px_0_0_10px]
      "
    >
      <div
        className="
        w-full h-full bg-[url('./assets/Alefba.svg')] bg-[length:120%_auto] bg-right
        grid grid-rows-[1fr_3fr_3fr] grid-cols-1 justify-center items-center px-2
        "
      >
        <div
          className="h-10 w-full
          flex items-center justify-center gap-3 text-white
          "
        >
          <p className="text-xl font-[600]">آوا</p>
          <LogoIcon />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <SideBarButton to="/Ava/" text="تبدیل گفتار" src={<SpeechIcon/> } />
          <SideBarButton to="/Ava/archive" text="آرشیو" src={<ArchiveIcon/>}/>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
