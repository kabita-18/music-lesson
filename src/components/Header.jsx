import { Typography } from "@material-tailwind/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsMusicNote } from "react-icons/bs";
import { BsFileMusic } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:space-x-4 md:py-4 w-full m-auto">
      <Typography className="text-2xl font-bold md:mr-6 md:ml-4 mb-2 whitespace-nowrap">
        Music Lesson
      </Typography>

      <div className="relative w-full mb-2 ">
        <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          className="px-3 py-2 pl-12 border rounded-3xl w-full focus:outline-none focus:border-blue-500"
          placeholder="Search for songs and music notes"
        />
      </div>
      <BsMusicNote className="ml-2 w-6 h-6 hidden md:inline text-gray-500" />
      <BsFileMusic className="ml-2 w-6 h-6 hidden md:inline text-gray-500" />
      <FiMessageSquare className="ml-2 w-6 h-6 hidden md:inline text-gray-500" />
    </div>
  );
};

export default Header;
