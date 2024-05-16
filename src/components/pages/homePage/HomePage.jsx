import React from "react";
import Event from "../../events/Event";

const HomePage = () => {
  return (
    <div className=" p-20 outline  outline-2 w-[1380px]	h-[900px]	m-auto mt-20 bg-inc-z50">
      <h1 className="">Events</h1>
      <div className="flex flex-wrap">
        <Event />
      </div>
    </div>
  );
};

export default HomePage;
