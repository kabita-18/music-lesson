import React from "react";
import Header from "./Header";
import CourseCard from "./Course-card";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineArrowBackIos } from "react-icons/md";
import guitar1 from "../images/guitar1.jpg";
import guitar2 from "../images/guitar2.jpg";
import band from "../images/band.jpg";
import monkey from "../images/monkey.jpg";
import bassguitar from "../images/bass-guitar.jpg";
import { BsFillMicMuteFill } from "react-icons/bs";
import Chat from "./musicchat/Chat";

const Course = () => {
  return (
    <div className="flex">
      <div className="left basis-9/12">
      <Header />
      <CourseCard />
      <div>
        <div className="flex justify-between mt-4">
          <h5 className="font-bold text-xl ">Community</h5>
          <span className="flex flex-row mt-2">
            <MdOutlineArrowBackIos />
            <IoIosArrowForward />
          </span>
        </div>

        <div class="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-5">
          <div class="w-full rounded hover:shadow-2xl relative">
            <img src={guitar1} alt="guitar" className="rounded-2xl"/>
            <BsFillMicMuteFill class="absolute bottom-2 right-2 text-white " />
          </div>
          <div class="w-full rounded hover:opacity-50 relative">
            <img src={bassguitar} className="rounded-2xl" alt="guitar" />
            <BsFillMicMuteFill class="absolute bottom-2 right-2 text-white" />
          </div>
          <div class="w-full rounded hover:shadow-2xl relative">
            <img src={band} alt="guitar" />
            <BsFillMicMuteFill class="absolute bottom-2 right-2 text-white" />
          </div>
          <div class="w-full rounded hover:shadow-2xl relative">
            <img src={guitar1} className="rounded-2xl"alt="guitar" />
            <BsFillMicMuteFill class="absolute bottom-2 right-2 text-white" />
          </div>
          <div class="w-full rounded hover:shadow-2xl relative">
            <img src={bassguitar} className="rounded-2xl" alt="guitar" />
            <BsFillMicMuteFill class="absolute bottom-2 right-2 text-white" />
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
