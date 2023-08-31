import React, { useEffect, useRef, useState } from "react";
import ArchiveFile from "./ArchiveFile";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import ReactLoading from "react-loading";
const theme = createTheme({
  palette: {
    blue: { main: "#118AD3" },
    green: { main: "#00BA9F" },
    red: { main: "#FF1654" },
  },
  direction: "rtl",
  typography: {
    fontFamily: `"IranSans", sans-serif`,
  },
});

const Archive = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(null);
  const container = useRef(null);
  const loadData = () => {
    axios
      .get("/api/requests?page=" + page, {
        headers: {
          Authorization: import.meta.env.VITE_API_KEY,
        },
      })
      .then(function (response) {
        setData(response.data);
      });
  };
  useEffect(() => {
    if (refresh) {
      if (container.current.children.length === 0) {
        setData(null);
        loadData();
      }
    }

    return () => {};
  }, [refresh]);

  useEffect(() => {
    loadData();
  }, [page]);
  if (data) {
    return (
      <div
        className='
        pr-40 pl-32 pt-24 py-20
        grid grid-cols-1 grid-rows-[1fr_10fr]
        '
      >
        <h1 className='[direction:rtl] text-2xl text-green '>آرشیو من</h1>
        <div
          className='
          w-full h-full
          grid grid-cols-1 grid-rows-[7fr_60fr_10fr]
          '
        >
          <div
            className='
            pr-2 pl-4
            grid grid-cols-[128px_80fr_150fr_95fr_390fr_100fr_65fr] grid-rows-1
            justify-center items-center text-center gap-2
            '
          >
            <p className='text-sm [direction:rtl] col-start-2 '>مدت زمان</p>
            <p className='text-sm [direction:rtl] col-start-3 '>نوع فایل</p>
            <p className='text-sm [direction:rtl] col-start-4 '>
              تاریخ بارگذاری
            </p>
            <p className='text-sm [direction:rtl] col-start-6 '>نام فایل</p>
          </div>
          <div
            ref={container}
            className='pl-2 gap-3 flex flex-col overflow-y-auto h-[65vh] [direction:rtl] [&>*]:[direction:ltr]'
          >
            {data.results.map((item) => (
              <ArchiveFile
                key={item.id}
                id={item.id}
                type={item.request_type}
                duration={item.duration}
                date={item.date}
                name={item.request_data.media_urls}
                refresh={setRefresh}
              />
            ))}
          </div>

          <div
            className={`
              flex justify-center items-center
              
            `}
          >
            <ThemeProvider theme={theme}>
              <Pagination
                onChange={(event, page) => {
                  setPage(page);
                }}
                count={Math.ceil(data.count / 10)}
                color='green'
                sx={{
                  direction: "rtl",
                  "& .Mui-selected": {
                    color: "white",
                  },
                }}
              />
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='
        h-full w-full 
        flex items-center justify-center 
        '
      >
        <ReactLoading type={"spin"} color={"#00BA9F"} />
      </div>
    );
  }
};

export default Archive;
