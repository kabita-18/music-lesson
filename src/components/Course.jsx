import React from "react";
import Header from "./Header";
import CourseCard from "./Coursecard";

import guitar1 from "../images/guitar1.jpg";

import band from "../images/band.jpg";

import bassguitar from "../images/bass-guitar.jpg";

import Chat from "./musicchat/Chat";
import MusicCarousel from "./MusicCarousel";

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
  },
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
  },
];

const Course = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="left lg:basis-8/12 lg:max-w-[70%]">
        <Header />
        <CourseCard />
        <MusicCarousel data={musicCarouselData} />
      </div>
      <div className="right lg:w-3/12 ">
        <Chat />
      </div>
    </div>
  );
};

export default Course;
