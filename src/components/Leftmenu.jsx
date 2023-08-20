import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiSolidDashboard } from "react-icons/bi";
import { ImHome } from "react-icons/im";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { TbNotesOff } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";
import { Link } from "react-router-dom";

const Leftmenu = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Practices" },
    { title: "Courses", icon: <ImHome /> },
    { title: "Progress", icon: <AiFillCheckCircle /> },
    { title: "Instructor", icon: <FiUsers /> },
    { title: "Music Notes", icon: <TbNotesOff /> },
  ];

 
  return (
    <>
      <div
        className={`bg-black fixed h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 h-full`}
        style={{ height: "100%", zIndex: "1" }}
      >
        <IoMdArrowRoundBack
          className={`bg-white text-dark-black text-3xl rounded-full absolute -right-3 top-9 border border-dark-black cursor-pointer ${
            !open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />

        {!open && (
          <a href="/" className="cursor-pointer rounded-full">
          <img
            className="cursor-pointer rounded-full"
            src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
            alt="user"
          />
          </a>
        )}

        <div
          className={`flex  bg-white rounded-full p-2 ${!open && "hidden"} `}
        >
          <div
            className={`h-10 w-10 overflow-hidden rounded-full md:ml-4 cursor-pointer  mr-2 ${
              open && "mr-2"
            }`}
          >
            <img
              className="rounded-full"
              src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
              alt="user"
            />
          </div>
          <div className="flex flex-col">
            <h1
              className={`text-black px-2  font-medium whitespace-nowrap ${
                !open && "scale-0"
              } `}
            >
              Music Theory
            </h1>
            <p className="underline pr-1">musiclearner@musicme</p>
          </div>
        </div>

        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <Link
              to={`/${menu.title}`}
              key={index}
              className="text-white text-l flex items-center gap-x-4 cursor-pointer  hover:bg-white hover:text-black rounded-full p-3 mt-1"
            >
              {/* <Link to={`/course/${menu.title}`}  className="flex items-center"> */}
              <span className="text-2xl block float-left">
                {menu.icon ? menu.icon : <BiSolidDashboard />}
              </span>

              <span
                className={`text-base font-medium flex-1 duration-200 ${
                  !open && "hidden"
                }`}
              >
                {menu.title}
              </span>
              {/* </Link> */}
            </Link>
          ))}
        </ul>

        <ul className="pt-3 absolute bottom-10 left-0 border-t-4 w-full">
          <li className="text-white text-l flex items-center gap-x-4 cursor-pointer  hover:bg-white hover:text-black rounded-full p-3 mt-1">
            <span className="text-2xl block float-left">
              <AiFillSetting />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Setting
            </span>
          </li>
          <li className="text-white text-l flex items-center gap-x-4 cursor-pointer  hover:bg-white hover:text-black rounded-full p-3 mt-1">
            <span className="text-2xl block float-left">
              <GoSignOut />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Sign Out
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Leftmenu;
