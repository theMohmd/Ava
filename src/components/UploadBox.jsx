import React, { useState } from "react";
import centerUploadBtn from "../assets/centerUploadBtn.svg";

import ResultBox from "./ResultBox";

const UploadBox = () => {
  const [uploaded, setUploaded] = useState(false);
  if (uploaded) {
    return (
      <ResultBox restart={setUploaded} color='blue'/>
    );
  } else {
    return (
      <div
        className="
      h-full w-full px-20
      flex flex-col justify-center items-center
      "
      >
        <button
          className="mb-2"
          onClick={() => {
            setUploaded(true);
          }}
        >
          <img src={centerUploadBtn} alt="upload btn" className="" />
        </button>
        <div className="overflow-scroll max-h-[20vh] py-4">
          <p className="[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light ">
            برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
            <br />
            متن پیاده شده آن، در اینجا ظاهر می شود
          </p>
        </div>
      </div>
    );
  }
};

export default UploadBox;
