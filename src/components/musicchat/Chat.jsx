import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Message from "./Message";
import Chatfooter from "./Chatfooter";

const Chat = () => {
  const [chatOpen, setChatOpen] = useState(true);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="flex flex-col">
      <div className="h-full bg-white border border-black-200 rounded-2xl px-6 py-6 ml-7 ">
        <div className="flex flex-row justify-between w-full text-base">
          <h1 className="font-bold">Music Chat</h1>
          <FaAngleDown onClick={toggleChat} className="cursor-pointer" />
        </div>
        {chatOpen && <Message />}
      </div>
      <Chatfooter />
    </div>
  );
};

export default Chat;
