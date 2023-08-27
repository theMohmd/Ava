import React, { useState } from "react";
import ResultBox from "./ResultBox";
import ReactLoading from "react-loading";
import {
  MicIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  WordIcon,
  ChainIcon,
  UploadIcon,
} from "../assets/Icons";
import axios, { Axios } from "axios";

const ArchiveFile = ({ type, name, date, refresh, duration, id }) => {
  const [deleted, setDeleted] = useState(false);
  const [data, setData] = useState(null);
  const download = () => {
    axios.get(name[0]);
  };
  const fetchData = () => {
    axios
      .get("/api/get_request/" + id, {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
        },
      })
      .then(function (response) {
        setData(response.data);
      });
  };
  const deleteReq = () => {
    refresh(Math.random());
    setDeleted(true);
    axios.delete("/api/get_request/" + id, {
      headers: {
        Authorization: import.meta.env.VITE_API_KEY,
      },
    });
  };
  const [expanded, setExpanded] = useState(false);
  if (deleted) return <></>;
  return (
    <div
      className={`
      grid grid-cols-[128px_1fr] grid-rows-${expanded ? "[1fr_6fr]" : "1"}
      text-center justify-center items-center
      hover:shadow-[1px_1px_5px_0px_rgba(0,0,0,0.05)]
      py-3 px-2 rounded-[10px]  border
      border-${
        !expanded
          ? "white"
          : type === "record"
          ? "green"
          : type === "upload"
          ? "blue"
          : type === "Url"
          ? "red"
          : "border-white"
      }
      
      `}
    >
      <div className='grid grid-cols-4 justify-center items-center '>
        <button
          className='
          h-8 aspect-square
          flex justify-center items-center
          hover:bg-[#DC3545] rounded-full 
          '
          onClick={deleteReq}
        >
          <DeleteIcon className='p-2 h-full w-full hover:stroke-white' />
        </button>
        <button
          className='
          h-8 aspect-square
          flex justify-center items-center group
          '
        >
          <CopyIcon className='h-full w-full p-2 fill-[#8F8F8F] hover:fill-green' />
        </button>
        <button
          className='
          h-8 aspect-square
          flex justify-center items-center group
          '
        >
          <WordIcon className='h-full w-full p-[7px] fill-[#8F8F8F] hover:fill-green' />
        </button>
        <button
          className='
          h-8 aspect-square
          flex justify-center items-center group
          '
          title='۳.۲ مگابایت'
          onClick={download}
        >
          <DownloadIcon className='h-full w-full p-2 fill-[#8F8F8F] hover:fill-green' />
        </button>
      </div>
      <div
        className='
        grid grid-cols-[80fr_150fr_95fr_490fr_65fr] gap-2
        text-center justify-center items-center
        '
      >
        <p className='text-xs font-iranSans'>{duration}</p>
        <p className='text-xs'>.mp4</p>
        <p className='text-xs font-iranSans'>{date.substr(0,10)}</p>

        {type === "Url" ? (
          <a
            className='justify-self-end h-[1.5rem] w-[300px] overflow-hidden text-blue text-end'
            href={name}
            
          >
            {name}
          </a>
        ) : (
          <p>{name}</p>
        )}
        <button
          onClick={() => {
            setExpanded(!expanded);
            fetchData();
          }}
          className={`
          flex justify-center items-center
          h-8 aspect-square rounded-full justify-self-end
          ${
            type === "record"
              ? "bg-green"
              : type === "upload"
              ? "bg-blue"
              : type === "Url"
              ? "bg-red"
              : null
          }
          `}
        >
          {type === "record" ? (
            <MicIcon />
          ) : type === "upload" ? (
            <UploadIcon />
          ) : type === "Url" ? (
            <ChainIcon />
          ) : null}
        </button>
      </div>
      {expanded && (
        <div
          className={`
        h-full w-full
        row-start-2 col-start-1 row-end-3 col-end-[-1]
        `}
        >
          {data ? (
            <ResultBox
              data={data.response_data}
              archive={true}
              color={
                type == "record" ? "green" : type == "upload" ? "blue" : "red"
              }
            />
          ) : (
            <div
              className='
        h-full w-full 
        flex items-center justify-center 
        pt-5
        '
            >
              <ReactLoading
                type={"spin"}
                color={
                  type === "record"
                    ? "#00BA9F"
                    : type === "upload"
                    ? "#118AD3"
                    : type === "Url"
                    ? "#FF1654"
                    : null
                }
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ArchiveFile;
