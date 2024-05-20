import React from "react";
import Event from "../../events/Event";
import Spiner from "../../redux/utils/Spiner";
import { useGetEventsQuery } from "../../redux/rtkQuery/rtkQuery";

const HomePage = () => {
  const { isLoading } = useGetEventsQuery();
  return (
    <div className=" p-20 outline  outline-2 w-[1331px]	h-[900px]	m-auto mt-20 bg-inc-z50">
      <h1 className="">Events</h1>
      <div className="flex flex-wrap">
        {isLoading && <Spiner className="justify-center" />}
        <Event />
      </div>
    </div>
  );
};

export default HomePage;
