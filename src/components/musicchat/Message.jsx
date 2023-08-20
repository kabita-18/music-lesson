import React, { useState } from "react";
import { MdSend } from "react-icons/md";

const Message = () => {
  const profileNames = ["Adam Smith", "Emily Brown", "Music Theories"];
  const profileImages = [
    "https://xsgames.co/randomusers/assets/avatars/female/67.jpg",
    "https://xsgames.co/randomusers/assets/avatars/female/67.jpg",
  ];

  const [messages, setMessages] = useState([
    { text: "I need help with music notes", sender: "other", time: "9:28 AM" },
    {
      text: "Is music theory different for each instrument",
      sender: "other",
      time: "9:29 AM",
    },
    {
      text: "Hey guys, let's practice more to improve!",
      sender: "you",
      
    },
    {
      text: "haha",
      sender: "other",
      
    },
    {
      text: "But i had to tune my",
      sender: "other",
      time: "9:32 AM",
    },

    {
      text: "Learn the Basics",
      sender: "other",
      time: "Beginner",
    },

    {
      text: "Understand Music Notes",
      sender: "you",
      
    },
  ]);

  const sendMessage = () => {
    const newMessage = {
      text: "New message text",
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="h-[420px] flex flex-col ">
      <div className="flex flex-col p-4 overflow-y-scroll no-scrollbar">
        {messages.map((message, index) => (
          <div key={index} className="mb-4">
            <div
              className={`p-2 max-w-[200px] ${
                message.sender === "you" && "float-right"
              }`}
            >
              <div className="flex items-center mb-1">
                {message.sender !== "you" && (
                  <img
                    src={profileImages[1]}
                    alt={profileNames[1]}
                    className="w-6 h-6 rounded-full mr-2 align-top "
                  />
                )}

                <div>
                  <p className="flex justify-between">
                    <span className="text-xs text-slate-500 font-semibold mb-1" >
                      {message.sender === "you" ? "You" : profileNames[1]}
                    </span>
                    <span className="text-xs">{message.time}</span>
                  </p>
                  <p className="bg-[#f0f0f0] rounded-3xl p-3 text-sm text-slate-800 font-normal">
                    {message.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 w-full">
        <div className="flex">
          <input
            type="text"
            className="w-full flex-1 p-2 rounded-3xl border border-gray-300 focus:outline-none"
            placeholder="Type your comment..."
          />
          <button className=" text-grey p-2 rounded-lg" onClick={sendMessage}>
            <MdSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
