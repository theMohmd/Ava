import React from "react";
import SideBarButton from "./SideBarButton";
import { ArchiveIcon, LogoIcon, SpeechIcon } from "../assets/Icons";
import { motion } from "framer-motion";

const SideBar = () => {
  return (
    <motion.div
      className='
      side-gradient rounded-[10px_0_0_10px] duration-200
      '
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
    >
      <div
        className='
        w-full h-full bg-[url("./assets/Alefba.svg")] bg-[length:120%_auto] bg-right
        grid grid-rows-[1fr_3fr_3fr] grid-cols-1 justify-center items-center px-2
        '
      >
        <motion.div
          className='h-10 w-full
          flex items-center justify-center gap-3 text-white
          '
          initial={{ x: "50", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <p className='text-xl font-[700]'>آوا</p>
          <LogoIcon />
        </motion.div>
        <div className='flex flex-col items-center justify-center gap-4'>
          <SideBarButton
            delay='0.1'
            to='/Ava/'
            text='تبدیل گفتار'
            src={<SpeechIcon />}
          />
          <SideBarButton
            delay='0.2'
            to='/Ava/archive'
            text='آرشیو'
            src={<ArchiveIcon />}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
