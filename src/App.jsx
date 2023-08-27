import React from "react";
import SideBar from "./components/SideBar";
import SpeechToText from "./components/SpeechToText";
import { Route, Routes } from "react-router-dom";
import Archive from "./components/Archive";

import DropDown from "./components/DropDown";
import PlayBar from "./components/PlayBar";
const App = () => {
  return (
    <div
      className="
      h-screen w-screen bg-[#fefefe]
      grid grid-cols-[15fr_2fr] grid-rows-1
      font-iranYekan
      overflow-hidden
      "
    >
      <DropDown className="absolute top-12 left-12" />

      <Routes>
        <Route path="/Ava/" element={<SpeechToText />} />
        <Route path="/Ava/archive" element={<Archive />} />
      </Routes>

      <SideBar />
    </div>
  );
};

export default App;
