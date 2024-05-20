import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Spiner = () => {
  return (
    <div>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#rgba(138, 138, 137, 1)"
        secondaryColor="rgba(52, 112, 255, 1)"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Spiner;
