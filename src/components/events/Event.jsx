import React from "react";
import { NavLink } from "react-router-dom";

import { useGetEventsQuery } from "../redux/rtkQuery/rtkQuery";

const Event = () => {
  // data = [1, 2, 3, 4, 5, 6, 7, 8];
  const { data } = useGetEventsQuery();
  // const events = useSelector((state) => state.eventState);
  // console.log("events", events);

  return (
    data &&
    data.map((el, idx) => {
      return (
        <div
          key={idx}
          className=" pl-6 pr-6 pt-2 pb-2 border-2 m-3 h-[110px] bg-gray-50 max-w-[300px] ">
          <h2 style={{ color: "red" }}>{el.name}</h2>
          <p className="text-base">{el.email}</p>
          <ul className="flex gap-10 mt-3">
            <NavLink to="/api/events/add">Registration</NavLink>
            <NavLink to="/api/events/participants">View</NavLink>
          </ul>
        </div>
      );
    })
  );
};

export default Event;
