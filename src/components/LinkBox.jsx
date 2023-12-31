import React from "react";
import centerLinkBtn from "../assets/centerLinkBtn.svg";
const LinkBox = () => {
  return (
    <div
      className="
      h-full w-full px-20
      flex flex-col justify-center items-center
      "
    >
      <div
        className="
        border border-[#FF1654] rounded-[50px]
        py-2 px-4 w-80 gap-2
        flex justify-center items-center
        "
      >
        <button className="">
          <img src={centerLinkBtn} alt="mic btn" className="" />
        </button>
        <input
          type="text"
          className="grow text-[#626262]"
          placeholder="example.com/sample.mp3"
        />
      </div>
      <div className="overflow-scroll max-h-[20vh] p-4">
        <p className="[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light">
          نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
          <br />و دکمه را فشار دهید
        </p>
      </div>
    </div>
  );
};

export default LinkBox;
