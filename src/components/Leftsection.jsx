import React from "react";
import { FiMusic } from "react-icons/fi";
import Box from "./Box";

const Leftsection = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex md:flex-row justify-between items-center">
        <h1 className="text-2xl mb-2 md:mb-0 md:text-xl">Music Theories </h1>
        <div className=" flex items-center md:mt-0">

          <span className="rounded-full bg-black p-3 mr-2  ">
            <FiMusic className="text-white" />
          </span>
          <h4 className="text-sm"> Learn the</h4>
        </div>

      </div>
      <Box />
    </div>
  );
};

export default Leftsection;
