import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginationList } from "../redux/slice";
import { selectorParticipantsArr } from "../redux/selector";

const Pagination = () => {
  const paginationArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectorParticipants = useSelector(selectorParticipantsArr);

  const dispatch = useDispatch();
  const handleClick = (idx) => {
    const newArr = selectorParticipants.slice(idx * 10, idx * 10 + 10);
    dispatch(paginationList(newArr));
  };
  return (
    <div className="flex gap-12 justify-center pt-10">
      {paginationArr.map((el, idx) => (
        <div key={idx} onClick={() => handleClick(idx)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
