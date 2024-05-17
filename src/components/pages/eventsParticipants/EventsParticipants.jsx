import React from "react";
import { useGetParticipantsQuery } from "../../redux/rtkQuery/rtkQuery";
import { NavLink } from "react-router-dom";

const EventsParticipants = () => {
  // data = [1, 2, 3, 4, 5, 6, 7, 8];
  const { data, error, isLoading } = useGetParticipantsQuery();
  console.log("data", data);
  console.log("error", error);
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
