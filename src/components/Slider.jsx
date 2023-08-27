import React, { useEffect, useRef, useState } from "react";

const Slider = ({ color, thumb = true, sliderRef = useRef(), onChange}) => {
  const sliderProgressRef = useRef();

  const update = () => {
    sliderProgressRef.current.style.width = (sliderRef.current.value / sliderRef.current.max * 100 ) + "%";
  };
  
  return (
    <div
      className='
        grid grid-cols-1 grid-rows-1
        justify-center items-center
        w-full
        '
    >
      <input
        ref={sliderRef}
        className={`
          row-start-1 col-start-1
          z-30 ${color} ${!thumb ? "opacity-0" : null}
          `}
        onChange={() => { onChange();update() }}
        type='range'
      />
      <div
        ref={sliderProgressRef}
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
        className='
          row-start-1 col-start-1
          z-10
          h-[1px]
          w-1/2
          bg-[#898989]
          rounded-full
          '
      ></div>
      <div
        className='
          row-start-1 col-start-1
          z-0
          w-full h-[1px]
          bg-[#C6C6C6]
          rounded-full
          '
      ></div>
    </div>
  );
};

export default Slider;
