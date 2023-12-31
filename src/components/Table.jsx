import React from "react";

const Table = () => {
  return (
    <div className="w-full bg-white rounded-md">
      <table className="table-fixed w-full">
        <thead>
          <tr className="h-[50px] border-b-[1px] border-slate-800">
            <th className="text-center text-[14px] text-[#212529]">Enr. No</th>
            <th className="text-center text-[14px] text-[#212529]">S. Name</th>
            <th className="text-center text-[14px] text-[#212529]">C. Name</th>
            <th className="text-center text-[14px] text-[#212529]">Fees</th>
            <th className="text-center text-[14px] text-[#212529]">
              Enr. Date
            </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((col, idx) => (
            <Ccolumn key={idx}>
              <Crow>1563124</Crow>
              <Crow>John Doe</Crow>
              <Crow>Percussion</Crow>
              <Crow>$120</Crow>
              <Crow>12-08-223</Crow>
            </Ccolumn>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

const Ccolumn = ({ children }) => (
  <tr className="h-[40px] border-b-[1px] border-gray-800">{children}</tr>
);

const Crow = ({ children }) => <td className="text-center">{children}</td>;
