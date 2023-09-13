import React from "react";
import people from "../assets/people.svg";

const Card = ({ head, text, key }) => (
  <div
    key={key}
    className="flex items-center justify-around gap-[16px] p-[20px] bg-white rounded-md"
  >
    <img src={people} alt="People" />
    <div className="flex flex-col gap-1">
      <span className="text-[22px] text-[#212529] font-normal">{head}</span>
      <span className="text-[12px] font-normal text-[#83858B]">{text}</span>
      <div className="w-full flex items-end justify-end">
        <span className="text-[9px] text-[#B33086]">View</span>
      </div>
    </div>
  </div>
);
export default Card;
