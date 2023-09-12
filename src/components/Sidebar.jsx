import React from "react";
import logo from "../assets/logo.png";
import dashboard from "../assets/dashboard.svg";
import icmusic from "../assets/icmusic.svg";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="h-screen w-[96px] sticky top-0 bg-white flex flex-col items-center justify-start gap-[48px] px-[12px] py-[10px] shrink-0">
      <a href="/">
        <img
          className="w-[48px] h-[48px] shrink-0 cursor-pointer"
          src={logo}
          alt="Octalogic Logo"
        />
      </a>
      <Link to="/">
        <div className="h-[58px] w-[58px] flex flex-col items-center justify-center gap-[1px] bg-[#FEDFE1] rounded">
          <img src={dashboard} alt="Dashboard" />
          <p className="text-xs text-[#901E75] font-normal">Home</p>
        </div>
      </Link>
      <Link to="/courses">
        <div className="h-[58px] w-[58px] flex flex-col items-center justify-center gap-[1px] bg-[#E5E7EB] rounded">
          <img src={icmusic} alt="Courses" />
          <p className="text-xs text-[#83858B] font-normal">Courses</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
