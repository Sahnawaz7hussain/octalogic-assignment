import React from "react";
import people from "../assets/people.svg";

const cardsData = [
  { head: 64, text: "total number of students" },
  { head: 12, text: "total number of courses" },
  { head: "$2000", text: "total amount earned" },
  { head: "Guitar", text: "best performing course" },
  { head: "Flute", text: "worst performing course" },
];

const Home = () => {
  return (
    <div className="w-full h-full flex items-start flex-col gap-[32px] py-[24px] px-[36px]">
      <h1 className="text-[#83858B] text-[28px] font-semibold">Overview</h1>
      <div className="flex gap-3">
        {cardsData.map((card) => (
          <SingleCard head={card.head} text={card.text} />
        ))}
      </div>
    </div>
  );
};

const SingleCard = ({ head, text }) => (
  <div className="flex items-center justify-around gap-[16px] p-[16px] bg-white rounded-md">
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

export default Home;
