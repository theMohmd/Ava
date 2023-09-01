import React, { useRef, useState } from "react";
import { ChainIcon } from "../assets/Icons";
import axios from "axios";
import ResultBox from "./ResultBox";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";

const LinkBox = ({ lang }) => {
  const [data, setData] = useState(null);
  const [state, setState] = useState("initial");
  const inputRef = useRef(null);

  const send = async () => {
    if (inputRef.current.value) {
      setState("waiting");
      axios
        .post(
          "https://harf.roshan-ai.ir/api/transcribe_files/",
          {
            media_urls: [inputRef.current.value],
            language: lang,
          },
          { headers: { Authorization: import.meta.env.VITE_API_KEY } }
        )
        .then(function (response) {
          setData(response.data);
          setState("result");
        })
        .catch(function (error) {
          setState("initial");
          console.log(error);
        });
    }
  };
  if (state === "initial") {
    return (
      <motion.div
        className='
        h-full w-full px-20
        flex flex-col justify-center items-center
        '
        initial={{ opacity: 0 ,transform: "translate(0, 30px)"}}
        animate={{ opacity: 1 ,transform: "translate(0, 0)"}}
        exit={{ opacity: 0 }}
      >
        <div
          className='
          border border-[#FF1654] rounded-[50px]
          py-2 px-4 w-80 gap-2
          flex justify-center items-center
          '
        >
          <button
            className='h-8 w-8 bg-red rounded-full hover:opacity-90'
            onClick={send}
          >
            <ChainIcon className='h-full w-full p-2' />
          </button>
          <input
            ref={inputRef}
            type='text'
            className='grow text-[#626262] outline-none hover:bg-slate-50 rounded-full px-2'
            placeholder='example.com/sample.mp3'
          />
        </div>
        <div className='max-h-[20vh] p-4'>
          <p className='[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light'>
            نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
            <br />و دکمه را فشار دهید
          </p>
        </div>
      </motion.div>
    );
  } else if (state === "waiting") {
    return (
      <motion.div
        className='
        h-full w-full
        flex justify-center items-center
        '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ReactLoading type={"spin"} color={"#FF1654"} />
      </motion.div>
    );
  } else if (state === "result") {
    return <ResultBox restart={setState} color='red' data={data} />;
  }
};

export default LinkBox;
