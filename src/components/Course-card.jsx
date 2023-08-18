import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import piano from "../images/piano.jpg";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillMicMuteFill } from "react-icons/bs";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdCallEnd } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { BiSolidStopwatch } from "react-icons/bi";

const CourseCard = () => {
  return (
    <Card className="w-400 rounded-lg p-3">
      <div className="flex justify-between items-center mx-3 ">
        <h3 className="font-bold">Music Basics</h3>
        <div className="flex item-center rounded-full">
         
            <img
              className="h-10 w-10 object-cover rounded-full cursor-pointer"
              src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
              alt="user"
            />
          {/* </div> */}
          <Typography className="text-black px-4  font-medium">
            John Mayer
          </Typography>
        </div>
      </div>

      <div className="relative rounded-3xl m-3 h-[320px]">
        <img className="rounded-3xl h-[320px] w-full object-cover" src={piano} alt="piano" />
        <div className="flex absolute justify-center space-x-4 py-4 bottom-0 w-full px-3 pl-12 border focus:outline-none hover:border-blue-500 bg-slate-500 opacity-60 rounded-3xl  ">
          <span className="bg-white p-4 rounded-full">
            <AiFillPlayCircle />
          </span>
          <span className="bg-white p-4 rounded-full">
            <BsFillMicMuteFill />
          </span>
          <span className="bg-white p-4 rounded-full">
            <BiSolidMessageRounded />
          </span>
          <span className="bg-white p-4 rounded-full">
            <BiDotsVerticalRounded />
           
          </span>
          <span className="bg-white p-4 rounded-full">
            
            <MdCallEnd />
          </span>


          
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-row px-2">
          <BsDot />
          <Typography className="text-gray-600/75 text-xs">50 Lessons Available</Typography>
        </div>
        <div className="flex flex-row">
          <BiSolidStopwatch />
          <Typography className="text-gray-600/75 text-xs"> Ends in: 45 min.</Typography>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
