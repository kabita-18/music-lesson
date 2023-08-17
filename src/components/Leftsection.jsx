import React from "react";
import { FiMusic } from "react-icons/fi";
import Box from "./Box";

const Leftsection = () => {
  return (
    <div className="flex flex-col p-4">
        <div className="flex justify-between items-center">
        <h1>Music Theories </h1>
        <div className=" flex items-center ml-auto">
            
            <span className="rounded-full bg-black p-4 mr-2">
                <FiMusic color="white" />
            </span>
            <h4 text-sm> Learn the</h4>
        </div>
      
        </div>
    <Box/>
    </div>
  );
};

export default Leftsection;
