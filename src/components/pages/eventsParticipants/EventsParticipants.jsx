import React, { useEffect, useState } from "react";
import { useGetParticipantsQuery } from "../../redux/rtkQuery/rtkQuery";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  selectorPaginationArr,
  selectorParticipantsArr,
} from "../../redux/selector";
import { participantsList } from "../../redux/slice";
import Pagination from "../../pagination/Pagination";

const EventsParticipants = () => {
  const [sortedParticipants, setSortedParticipants] = useState([]);
  const dispatch = useDispatch();
  const {
    data: fetchedParticipants,
    error,
    isLoading,
  } = useGetParticipantsQuery();
  const selectorParticipants = useSelector(selectorParticipantsArr);
  const selectorPagination = useSelector(selectorPaginationArr);

  useEffect(() => {
    if (fetchedParticipants) {
      dispatch(participantsList(fetchedParticipants));
    }
  }, [fetchedParticipants, dispatch]);

  useEffect(() => {
    setSortedParticipants(
      [...selectorParticipants].sort((a, b) => a.name.localeCompare(b.name))
    );
  }, [selectorParticipants]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const dataToDisplay =
    selectorPagination.length > 0 ? selectorPagination : sortedParticipants;

  return (
    <div className="p-20 outline outline-2 w-[1331px] h-[900px] m-auto mt-20 bg-inc-z50">
      <NavLink
        to="/"
        className="inline-block w-[120px] h-[30px] outline outline-2 mb-[40px]">
        Home
      </NavLink>
      <div className="flex flex-wrap">
        {dataToDisplay.map((el, idx) => (
          <div
            key={idx}
            className="pl-6 pr-6 pt-6 pb-2 border-2 m-3 h-[110px] bg-gray-50 max-w-[300px]">
            <h2 style={{ color: "red" }}>{el.name}</h2>
            <p className="text-base">{el.email}</p>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default EventsParticipants;
