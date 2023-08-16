import React from "react";
import { Slider } from "@mui/material";
import { PauseIcon, StopIcon, VolumeIcon } from "../assets/Icons";


const colorConvert = {
  blue: "#118AD3",
  green: "#00BA9F",
  red: "#FF1654",
};
const PlayBar = ({ color }) => {
  return (
    <div
      className="
      w-[520px] h-auto items-center justify-center
      rounded-[10px]
      p-3
      bg-[#F8F8F8]
      grid grid-cols-[51fr_358fr_40fr_73fr] grid-rows-1 gap-2
      mx-10
      "
    >
      <div className="flex justify-around">
        <button className="h-5 w-5">
          <StopIcon className="h-full w-full" fill="#3D3D3D" stroke="none"/>
        </button>
        <button>
          <PauseIcon />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <Slider
          sx={{
            color: colorConvert[color],
            height: "3px",
            "& .MuiSlider-rail ": {
              color : "#C6C6C6;",
              height: "1px"
            },
            "& .MuiSlider-thumb ": {
              height:"14px",
              width:"14px",
              boxShadow:"none",
              dropShadow:"none"
            },
          }}
          size=""
          max={100}
          min={0}
        />
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
          <VolumeIcon/>
        </button>
        <div className="w-[70%] flex justify-center items-center">
          <Slider
            sx={{
              color: colorConvert[color],
              height: "2px",
              "& .MuiSlider-thumb ": {
                display: "none",
                
              },
              "& .MuiSlider-rail ": {
                color : "#C6C6C6;",
                height: "2px"
              },
              
            }}
            
            size="small"
            max={100}
            min={0}
          />
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
