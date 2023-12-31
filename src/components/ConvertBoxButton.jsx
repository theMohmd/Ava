import React from "react";

const ConvertBoxButton = ({className, src, text, onClick, active, color}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} 
      
      flex justify-center items-center
      h-full gap-2 rounded-[10px_10px_0_0]
      ${active?` text-white text-base px-4`:"text-sm font-light px-2 text-[#969696]"}
      `}
          
    >
      <p>{text}</p>
      <img src={src} alt="icon" className={!active?"[filter:brightness(40%)]":""}/>
    </button>
  );
};

export default ConvertBoxButton;
