import React from "react";

const Slider = ({id, color}) => {
  const update = () => {
    const val = document.getElementById(`sliderInput${id}`).value;
    document.getElementById(`sliderProgress${id}`).style.width = val + "%";
  };
  return (
    <div
        className="
        grid grid-cols-1 grid-rows-1
        justify-center items-center
        w-full
        "
      >
        <input
          id={`sliderInput${id}`}
          className={`
          row-start-1 col-start-1
          z-30 thumb-${color}
          `}
          onChange={update}
          type="range"
        />
        <div
          id={`sliderProgress${id}`}
          className={`
          row-start-1 col-start-1
          z-20
          h-[3px]
          w-1/2
          bg-${color}
          rounded-full
          `}
        ></div>
        <div
          id={`sliderPreload${id}`}
          className="
          row-start-1 col-start-1
          z-10
          h-[1px]
          w-1/2
          bg-[#898989]
          rounded-full
          "
        ></div>
        <div
          className="
          row-start-1 col-start-1
          z-0
          w-full h-[1px]
          bg-[#C6C6C6]
          rounded-full
          "
        ></div>
      </div>
  );
};

export default Slider;
