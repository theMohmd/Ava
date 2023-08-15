import React from "react";
import centerMicBtn from "../assets/centerMicBtn.svg";
const RecordBox = () => {
  return (
    <div
      className="
      h-full w-full px-20
      flex flex-col justify-center items-center
      "
    >
      <button className="mb-2">
        <img src={centerMicBtn} alt="mic btn" className="" />
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
