import React, { useState } from "react";

import ConvertBox from "./ConvertBox";
import LangSelect from "./LangSelect";

const SpeechToText = () => {
  const [lang, setLang] = useState("fa");
  return (
    <div
      className='
        h-full w-full
        grid grid-cols-[33fr_65fr_28fr] grid-rows-[24fr_48fr_21fr]
        '
    >
      <ConvertBox lang={lang} className='col-start-2 row-start-2' />

      <div
        className='
        [direction:rtl]
        col-start-2 row-start-1 
        flex justify-center flex-col 
        text-center
        px-20 pt-5
        '
      >
        <h1
          className='
          text-[#00BA9F] text-[28px] font-bold
          mb-2
          '
        >
          تبدیل گفتار به متن
        </h1>
        <p
          className='
          text-[#969696]
          '
        >
          آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، <br />
          زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
        </p>
      </div>

      <div className='col-start-2 row-start-3 py-4'>
        <LangSelect lang={lang} setLang={setLang} />
      </div>
    </div>
  );
};

export default SpeechToText;
