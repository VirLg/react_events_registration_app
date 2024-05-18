import React, { useState } from "react";
import { useGetParticipantsQuery } from "../../redux/rtkQuery/rtkQuery";
import { NavLink } from "react-router-dom";
import { selectorEvent } from "../../redux/selector";
import { useSelector } from "react-redux";

const EventsParticipants = () => {
  const { data, error, isLoading } = useGetParticipantsQuery();
  const events = useSelector((state) => state.eventState);
  console.log("events", events);
  return (
    <div className=" p-20 outline  outline-2 w-[1331px]	h-[900px]	m-auto mt-20 bg-inc-z50">
      <NavLink
        to="/"
        className="inline-block w-[120px] h-[30px] outline outline-2 mb-[40px]">
        Home
      </NavLink>

      <div className="flex flex-wrap">
        {data &&
          data.map((el, idx) => {
            return (
              <div
                key={idx}
                className=" pl-6 pr-6 pt-6 pb-2 border-2 m-3 h-[110px] bg-gray-50 max-w-[300px] ">
                <h2 style={{ color: "red" }}>{el.name}</h2>
                <p className="text-base">{el.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventsParticipants;
