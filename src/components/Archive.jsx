import React, { useEffect, useRef, useState } from "react";
import ArchiveFile from "./ArchiveFile";
import { Pagination } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import ReactLoading from "react-loading";
import { motion } from "framer-motion";
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
      .get("https://harf.roshan-ai.ir/api/requests?page=" + page, {
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
  }, [refresh]);

  useEffect(() => {
    loadData();
  }, [page]);
  if (data) {
    return (
      <motion.div
        className='
        pr-40 pl-32 pt-24 py-20
        grid grid-cols-1 grid-rows-[1fr_10fr]
        '
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className='[direction:rtl] text-2xl text-green '
        >
          آرشیو من
        </motion.h1>
        <div
          className='
          w-full h-full
          grid grid-cols-1 grid-rows-[7fr_60fr_10fr]
          '
        >
          {/* labels */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
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
          </motion.div>
          {/* data */}
          <div
            ref={container}
            className='pl-2 gap-3 flex flex-col overflow-y-auto h-[65vh] [direction:rtl] [&>*]:[direction:ltr]'
          >
            {data.results.map((item, index) => (
              <ArchiveFile
                key={item.id}
                id={item.id}
                type={item.request_type}
                duration={item.duration}
                date={item.date}
                name={item.request_data.media_urls}
                delay={index}
                refresh={setRefresh}
              />
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            className={`
              flex justify-center items-center
              
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
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
                  "& .Mui-selected:hover": {
                    color: "#000000DE",
                  },
                }}
              />
            </ThemeProvider>
          </motion.div>
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className='
        h-full w-full 
        flex items-center justify-center 
        '
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ReactLoading type={"spin"} color={"#00BA9F"} />
      </motion.div>
    );
  }
};

export default Archive;
