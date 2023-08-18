import React from "react";
import { FaAngleDown } from "react-icons/fa";
import Message from "./Message";
import Chatfooter from "./Chatfooter";

const Chat = () => {
  return (
    <div className="flex flex-col h-full ">
      <div className="w-[380px] h-full bg-white border border-black-200 rounded-2xl px-6 py-6 ml-7">
        <div className="flex flex-row justify-between w-full text-base">
          <h1 className="font-bold">Music Chat</h1>
          <FaAngleDown />
        </div>
        <Message />
      </div>
      <Chatfooter />
    </div>
  );
};

export default Chat;
