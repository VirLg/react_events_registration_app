import React from "react";
import { NavLink } from "react-router-dom";

const Event = ({ data }) => {
  data = [1, 2, 3, 4, 5, 6, 7, 8];
  return data.map((el, idx) => {
    return (
      <div
        key={idx}
        className=" items-center pl-6 pr-6 pt-2 pb-2 border-2 m-3 h-[110px] bg-gray-50 max-w-[300px] ">
        <h2 style={{ color: "red" }}>Title</h2>
        <p className="text-2xl">description</p>
        <ul className="flex justify-between ">
          <NavLink to="/api/event/add">Registration</NavLink>
          <NavLink to="/api/events/participants">View</NavLink>
        </ul>
      </div>
    );
  });
};

export default Event;
