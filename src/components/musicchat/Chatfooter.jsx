import React, { useState } from "react";
import { PiBookOpenTextThin } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { SlNote } from "react-icons/sl";
import { Typography } from "@material-tailwind/react";
import { IoIosArrowForward } from "react-icons/io";

const IconBlock = ({ icon, text, accordianicon }) => {
  return (
    <div className="flex items-center bg-white rounded-3xl border border-black-150  mt-2 ml-2 px-2 py-1">
      <div className="h-8 w-8 overflow-hidden rounded-full cursor-pointer mr-2 bg-black text-white text-center flex items-center justify-center">
        {icon}
      </div>
      <Typography className="text-black px-4 font-medium">{text} </Typography>

      <div className="ml-auto">{accordianicon}</div>
    </div>
  );
};

const Chatfooter = () => {
  const [chatOpen, setChatOpen] = useState(true);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };
  return (
    <div className="px-4">
      <IconBlock
        icon={<PiBookOpenTextThin />}
        text="Important Practises"
        accordianicon={<IoIosArrowForward onClick={toggleChat} />}
      />

      <IconBlock
        icon={<AiOutlineHome />}
        text="Assignment"
        accordianicon={<IoIosArrowForward onClick={toggleChat} />}
      />
      <IconBlock
        icon={<SlNote />}
        text="Music Notes"
        accordianicon={<IoIosArrowForward onClick={toggleChat} />}
      />
    </div>
  );
};

export default Chatfooter;
