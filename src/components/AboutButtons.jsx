import React from "react";

const RightButton = () => {
  return (
    <div className="flex flex-col justify-around mt-10 mb-4 md:flex-row items-center ">
      <div className={`flex w-[80%] md:w-[40%] justify-center  bg-white rounded-full p-2 md:mb-0 mb-4`}>
          <h1 className={`text-gray whitespace-nowrap text-base `}>
            Leave a review
          </h1>
      </div>

      <div className={`flex w-[80%] md:w-[40%] justify-center bg-white rounded-full p-2`}>
          <h1 className={`text-gray whitespace-nowrap text-base `}>
            Continue Learning
          </h1>
      </div>
    </div>
  );
};

export default RightButton;
