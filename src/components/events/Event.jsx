import React from "react";

const Event = ({ data }) => {
  data = [1, 2, 3, 4, 5];
  return data.map((el, idx) => {
    return (
      <div
        key={idx}
        className="flex items-center border-2 m-3 h-[54px] bg-gray-50 max-w-[760px] ml-10">
        <h2 style={{ color: "red" }}>Title</h2>
        <p className="text-2xl">description</p>
        <ul>
          <li className="text-slate-200	">Registration</li>
          <li>View!!</li>
        </ul>
      </div>
    );
  });
};

export default Event;
