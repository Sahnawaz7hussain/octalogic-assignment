import React from "react";
import Card from "../components/Card";
import Table from "../components/Table";
import { Table2 } from "../components/Table2";

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
      {/* cards  */}
      <div className="flex flex-wrap gap-5">
        {cardsData.map((card, idx) => (
          <Card key={idx} head={card.head} text={card.text} />
        ))}
      </div>
      <span className="text-[16px] uppercase text-[#83858B] font-semibold tracking-wide">
        Latest Enrolments
      </span>
      <Table />
      <span className="text-[16px] uppercase text-[#83858B] font-semibold tracking-wide">
        Best Students{" "}
      </span>
      <Table2 />
    </div>
  );
};

export default Home;
