import React from "react";

const SoundSlider = ({color}) => {
  const update = () => {
    const val = document.getElementById(`soundSliderInput`).value;
    document.getElementById(`soundSliderProgress`).style.width = val + "%";
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
        id={`soundSliderInput`}
        className={`
          row-start-1 col-start-1
          z-30 
          opacity-0
          `}
        onChange={update}
        type="range"
      />
      <div
        id={`soundSliderProgress`}
        className={`
          row-start-1 col-start-1
          z-20
          h-[3px]
          w-1/2
          rounded-full
          bg-${color}
          `}
      ></div>
      <div
        className="
          row-start-1 col-start-1
          z-0
          w-full h-[3px]
          bg-[#C6C6C6]
          rounded-full
          "
      ></div>
    </div>
  );
};

export default SoundSlider;
