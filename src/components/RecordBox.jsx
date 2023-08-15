import React, { useState } from "react";
import centerMicBtn from "../assets/centerMicBtn.svg";
import { StopIcon, MicIcon } from "../assets/Icons";

const RecordBox = () => {
  const [recording, setRecording] = useState(false);
  return (
    <div
      className="
      h-full w-full px-20
      flex flex-col justify-center items-center
      "
    >
      <button
        className={`bg-green mb-2 rounded-full relative h-16 w-16 ${recording?"animate-pulse":""}`}
        onClick={() => {
          setRecording(!recording);
        }}
      >
        {recording ? <StopIcon className={"m-3"}/> : <MicIcon />}
      </button>
      <div className="overflow-scroll max-h-[20vh] py-4">
        <p className="[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light">
          برای شروع به صحبت، دکمه را فشار دهید
          <br />
          متن پیاده شده آن، در اینجا ظاهر شود
        </p>
      </div>
    </div>
  );
};

export default RecordBox;
