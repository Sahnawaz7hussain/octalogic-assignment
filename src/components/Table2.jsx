import React from "react";

export const Table2 = () => {
  return (
    <div className="w-full bg-white rounded-md">
      <table className="table-fixed w-full">
        <thead>
          <tr className="h-[50px] border-b-[1px] border-slate-800">
            <th className="text-center text-[14px] text-[#212529]">Reg. No</th>
            <th className="text-center text-[14px] text-[#212529]">F. Name</th>
            <th className="text-center text-[14px] text-[#212529]">L. Name</th>
            <th className="text-center text-[14px] text-[#212529]">Course #</th>
            <th className="text-center text-[14px] text-[#212529]">
              Total Fees
            </th>
            <th className="text-center text-[14px] text-[#212529]">
              Reg. Date
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((col, idx) => (
            <Ccolumn key={idx}>
              <Crow>43422</Crow>
              <Crow>John</Crow>
              <Crow>Doe</Crow>
              <Crow>3</Crow>
              <Crow>$300</Crow>
              <Crow>01-6-2023</Crow>
            </Ccolumn>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Ccolumn = ({ children }) => (
  <tr className="h-[40px] border-b-[1px] border-gray-800">{children}</tr>
);

const Crow = ({ children }) => <td className="text-center">{children}</td>;
