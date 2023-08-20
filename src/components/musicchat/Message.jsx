import React, { useState } from "react";
import { MdSend } from "react-icons/md";

const Message = () => {
  const profileNames = ["John Doe", "Jane Smith"];
  const profileImages = [
    "https://xsgames.co/randomusers/assets/avatars/female/67.jpg",
    "https://xsgames.co/randomusers/assets/avatars/female/67.jpg",
  ];

  const [messages, setMessages] = useState([
    { text: "I need help with music notes", sender: "you", time: "10:00 AM" },
    {
      text: "Is music theory different for each instrument",
      sender: "other",
      time: "10:05 AM",
    },
    {
      text: "Is music theory different for each instrument",
      sender: "you",
      time: "10:05 AM",
    },
    {
      text: "Is music theory different for each instrument",
      sender: "other",
      time: "10:05 AM",
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
    <div className="h-[420px] w-[300px] flex flex-col ">
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
                    className="w-6 h-6 rounded-full mr-2 align-top"
                  />
                )}

                <div>
                  <p className="flex justify-between">
                    <span className="text-xs">
                      {message.sender === "you" ? "You" : profileNames[1]}
                    </span>
                    <span className="text-xs">{message.time}</span>
                  </p>
                  <p className="bg-[#f0f0f0] rounded-lg p-3 text-sm">
                    {message.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4">
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-2 rounded-3xl border border-gray-300 focus:outline-none"
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
