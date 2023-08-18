import React, { useRef, useState } from "react";
import ResultBox from "./ResultBox";
import { SendIcon, UploadIcon, WaitIcon } from "../assets/Icons";
import axios from "axios";

const UploadBox = ({ lang }) => {
  const [state, setState] = useState("initial");
  const [fileName, setFileName] = useState(null);
  const inputRef = useRef(null);
  const check = () => {
    if (inputRef.current.value) {
      setState("fileSelected");
      setFileName(inputRef.current.files[0].name);
    }
  };
  const send = async () => {
    
    if (state === "fileSelected") {
      var bodyFormData = new FormData();
      bodyFormData.append("language", lang);
      bodyFormData.append("media", inputRef.current.value);
      console.log(inputRef.current.files)
      // axios
      //   .post(
      //     "https://harf.roshan-ai.ir/api/transcribe_files/",
      //     bodyFormData,
      //     { headers: { Authorization: import.meta.env.VITE_API_KEY } }
      //   )
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  };
  if (state === "result") {
    return <ResultBox restart={setState} color="blue" />;
  } else if (state === "waiting") {
    return(
      <div
        className="
        h-full w-full
        flex justify-center items-center
        "
      >
        <WaitIcon className="[&>div:after]:bg-blue" />
      </div>
    )
  } else if (state === "initial" || state === "fileSelected") {
    return (
      <div
        className="
        h-full w-full px-20
        flex flex-col justify-center items-center
      
      "
      >
        <button
          className="
          h-16 w-16 mb-2
          bg-blue 
          rounded-full 
          relative 
          overflow-hidden
          hover:opacity-90
          "
        >
          <input
            ref={inputRef}
            type="file"
            className={`
            h-full w-full 
            absolute top-0 left-0 
            cursor-pointer
            opacity-0
            
            `}
            accept=".wav"
            onChange={check}
          />

          <UploadIcon className="h-full w-full p-3" />
        </button>

        {state === "fileSelected" ? (
          <div
            className="
            flex gap-3 justify-center items-center
            "
          >
            <p
              className="
            font-iranYekan text-gray-800 
            max-w-[20ch] overflow-hidden
            "
            >
              {fileName}
            </p>
            <button
              className="
              h-8 w-8
              bg-blue rounded-full 
              hover:opacity-90"
              onClick={send}
            >
              <SendIcon className="h-full w-full p-[7px] stroke-white" />
            </button>
          </div>
        ) : (
          <div className="overflow-scroll max-h-[20vh] py-4">
            <p className="[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light ">
              برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
              <br />
              متن پیاده شده آن، در اینجا ظاهر می شود
            </p>
          </div>
        )}
      </div>
    );
  }
};

export default UploadBox;
