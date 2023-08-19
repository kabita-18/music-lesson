import React from "react";
import Header from "./Header";
import CourseCard from "./Course-card";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import guitar1 from "../images/guitar1.jpg";

import band from "../images/band.jpg";

import bassguitar from "../images/bass-guitar.jpg";
import { BsFillMicMuteFill } from "react-icons/bs";
import Chat from "./musicchat/Chat";

const musicCarouselData = [
  {
    image: guitar1,
  },
  {
    image: band,
  },
  {
    image: bassguitar,
  },
  {
    image: band,
  },
  {
    image: bassguitar,
  }
]

const Course = () => {
  return (
    <div className="flex">
      <div className="left basis-9/12">
      <Header />
      <CourseCard />
      <div>
        <div className="flex justify-between mt-4">
          <h5 className="font-bold text-xl" onClick={()=>console.log("asasas")}>Community</h5>
          <span className="flex flex-row mt-2">
            <MdOutlineArrowBackIos />
            <IoIosArrowForward />
          </span>
        </div>

        <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-5 md:grid md:grid-row-1">
          <div className="w-full rounded hover:shadow-2xl relative ">
            <img src={guitar1} alt="guitar" className="rounded-2xl"/>
            <BsFillMicMuteFill className="absolute bottom-2 right-2 text-white " />
          </div>
          <div className="w-full rounded hover:shadow-2xl relative">
            <img src={bassguitar} className="rounded-2xl" alt="guitar" />
            <BsFillMicMuteFill className="absolute bottom-2 right-2 text-white" />
          </div>
          <div className="w-full rounded hover:shadow-2xl relative">
            <img src={band} className="rounded-2xl" alt="guitar" />
            <BsFillMicMuteFill className="absolute bottom-2 right-2 text-white" />
          </div>
          <div className="w-full rounded hover:shadow-2xl relative">
            <img src={guitar1} className="rounded-2xl"alt="guitar" />
            <BsFillMicMuteFill className="absolute bottom-2 right-2 text-white" />
          </div>
          <div className="w-full rounded hover:shadow-2xl relative">
            <img src={bassguitar} className="rounded-2xl" alt="guitar" />
            <BsFillMicMuteFill className="absolute bottom-2 right-2 text-white" />
          </div>
        </div>
      </div>
      </div>
      <div className="right">
        <Chat/>
      </div>
    </div>
  );
};

export default Course;
