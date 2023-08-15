import React from "react";
import stopIcon from "../assets/stop.svg";
import pauseIcon from "../assets/pause.svg";
import volumeIcon from "../assets/volume.svg";
import Slider from "./Slider"


const PlayBar = ({ color }) => {
  return (
    <div
      className="
      w-full h-auto items-center justify-center
      rounded-[10px]
      p-3
      bg-[#F8F8F8]
      grid grid-cols-[51fr_358fr_40fr_73fr] grid-rows-1 gap-2
      mx-10
      "
    >
      <div className="flex justify-around">
        <button>
          <img src={stopIcon} alt="" />
        </button>
        <button>
          <img src={pauseIcon} alt="" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Slider />
      </div>
      <div>
        <p
          className="
          text-sm font-iranSans
          "
        >
          4:29
        </p>
      </div>
      <div
        className="
        flex gap-2
        "
      >
        <button>
          <img src={volumeIcon} alt="" />
        </button>
        <div className="w-[70%] flex justify-center items-center">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
