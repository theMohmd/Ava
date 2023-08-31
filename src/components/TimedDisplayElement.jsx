import React from "react";

const TimedDisplayElement = ({ text, startT, endT }) => {
  return (
    <div
      className={`
      w-full p-5
      rounded-[25px] 
      odd:bg-[#F2F2F2]
      font-light
      grid grid-rows-1 grid-cols-[1fr_1fr_10fr] gap-2
      text-[rgba(0,0,0,0.8)]
      `}
    >
      <p className='font-iranSans'>{startT}</p>
      <p className='font-iranSans'>{endT}</p>
      <p className='mr-2'>{text}</p>
    </div>
  );
};

export default TimedDisplayElement;
