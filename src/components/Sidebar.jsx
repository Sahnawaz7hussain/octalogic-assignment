import React from "react";
import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.svg";
import icmusic from "../assets/icmusic.svg";
const Sidebar = () => {
  return (
    <div className="h-[1024px] w-[96px] flex flex-col items-center justify-start gap-[48px] px-[12px] py-[10px] shrink-0">
      <img
        className="w-[48px] h-[48px] shrink-0 cursor-pointer"
        src={logo}
        alt="Octalogic Logo"
      />
      <div className="h-[58px] w-[58px] flex flex-col items-center justify-center gap-[1px] bg-[#FEDFE1] cursor-pointer">
        <img src={dashboard} alt="Dashboard" />
        <p className="text-xs text-[#901E75] font-normal">Home</p>
      </div>
      <div className="h-[58px] w-[58px] flex flex-col items-center justify-center gap-[1px] bg-[#E5E7EB] cursor-pointer">
        <img src={icmusic} alt="Courses" />
        <p className="text-xs text-[#83858B] font-normal">Courses</p>
      </div>
    </div>
  );
};

export default Sidebar;
