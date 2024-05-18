import React, { useEffect, useState } from "react";
import {
  useGetEventsQuery,
  useGetParticipantsQuery,
} from "../../redux/rtkQuery/rtkQuery";
import { NavLink } from "react-router-dom";
import { selectorEvent, selectorPaginationArr } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import { eventList, participantsList } from "../../redux/slice";
import Pagination from "../../pagination/Pagination";

const EventsParticipants = () => {
  const [render, setRender] = useState([]);
  const dispatch = useDispatch();
  const { data: fetchedEvents, error, isLoading } = useGetParticipantsQuery();
  const selectorParticipants = useSelector(
    (state) => state.eventState.participants
  );
  const selectorPagination = useSelector(selectorPaginationArr);
  console.log("first", selectorPagination);
  useEffect(() => {
    if (fetchedEvents) {
      dispatch(participantsList(fetchedEvents));
    }
  }, [fetchedEvents, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  let a = selectorPagination;

  if (a.length > 0) {
    a = selectorPagination;
  } else {
    a = selectorParticipants;
  }
  return (
    <>
      <div className=" p-20 outline  outline-2 w-[1331px]	h-[900px]	m-auto mt-20 bg-inc-z50">
        <NavLink
          to="/"
          className="inline-block w-[120px] h-[30px] outline outline-2 mb-[40px]">
          Home
        </NavLink>

        <div className="flex flex-wrap">
          {a.map((el, idx) => {
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
        <Pagination />
      </div>
    </>
  );
};

export default EventsParticipants;
