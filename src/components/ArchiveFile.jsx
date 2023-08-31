import React, { useEffect, useRef, useState } from "react";
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
import axios from "axios";

const ArchiveFile = ({ name, date, refresh, duration, id }) => {
  const [deleted, setDeleted] = useState(false);
  const [data, setData] = useState(null);
  const [type, setType] = useState(); // Url, upload, record
  const once = useRef();
  const [extension, setExtension] = useState();

  const copyAction = async () => {
    if (!data) {
      axios
        .get("/api/get_request/" + id, {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        })
        .then(function (response) {
          setData(response.data);
          var text = "";
          response.data.response_data[0].segments.forEach((element) => {
            text += element.text + " ";
          });
          navigator.clipboard.writeText(text);
        });
    } else {
      var text = "";
      data.response_data[0].segments.forEach((element) => {
        text += element.text + " ";
      });
      navigator.clipboard.writeText(text);
    }
  };
  const findType = (input) => {
    var temp = input.substr(input.length - 5);
    var tempArr = temp.split(".");
    return tempArr.pop();
  };
  useEffect(() => {
    if (typeof name === "string") {
      setExtension(findType(name));
      setType("upload");
    } else {
      setType("Url");
      setExtension("link");
    }
  }, [once]);

  const fetchData = async () => {
    if (!data) {
      axios
        .get("/api/get_request/" + id, {
          headers: {
            Authorization: import.meta.env.VITE_API_KEY,
          },
        })
        .then(function (response) {
          setData(response.data);
        });
    }
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
          onClick={copyAction}
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
        <p className='text-xs'>{extension}</p>
        <p className='text-xs font-iranSans'>{date.substr(0, 10)}</p>

        {type === "Url" ? (
          <a
            className='px-2 overflow-hidden max-w-[100%] whitespace-nowrap text-ellipsis text-blue'
            href={name}
          >
            {name}
          </a>
        ) : (
          <p className='px-2 overflow-hidden max-w-[100%] whitespace-nowrap text-ellipsis'>
            {name}
          </p>
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
