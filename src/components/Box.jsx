import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography
} from "@material-tailwind/react";
import card1image from "../images/card1image.png";
import card2image from "../images/card2image.png";
import card3image from "../images/card3image.png";
import card4image from "../images/card4image.png";
import {BiSolidNews} from "react-icons/bi"
import {MdOutlineTipsAndUpdates} from "react-icons/md"
import {GrNotes} from "react-icons/gr"
import {AiTwotoneSave} from "react-icons/ai"

const cardData = [
  {
    src: card1image,
    title: "Latest News",
    icon: <BiSolidNews/>,
    subtitle: "Discover the latest updates",
    description: "Stay up to date with the music world"
  },
  {
    src: card2image,
    title: "Music Practice Tips",
    icon: <MdOutlineTipsAndUpdates/>,
    subtitle: "Improve your skills",
    description: "Enhance your music abilities"
  },
  {
    src: card3image,
    title: "Music Instruments Guide",
    icon: <GrNotes/>,
    subtitle: "Discover different instruments",
    description: "Explore their uniquue sounds"
  },
  {
    src: card4image,
    title: "Music Note Memorization",
    icon:<AiTwotoneSave/>,
    subtitle: "Master music notes",
    description: "Track your progress"
  }
];

function Box() {
  return (
    <div className="flex flex-col space-x-1 pt-5">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="w-[500px] flex-row h-[140px] rounded-lg bg-[#F0F0F0] mb-2 p-2"
        >
          <CardHeader
            
            className="m-0 w-2/5 shrink-0 flex items-center bg-[#F0F0F0]"
          >
            <img
              src={card.src}
              className="h-9/12 w-9/12 object-cover rounded-lg"
              alt={`card${index}`}
            />
            
          </CardHeader>
          <CardBody className="w-3/5">
            <Typography variant="h6" color="gray" className="mb-4 uppercase w-full" sx={{width:"100%"}}>
             <span className="flex flex-row justify-between ">
                {card.title}
                {card.icon}
              </span> 
             
            </Typography>
            <Typography variant="paragraph" color="blue-gray" className="mb-2">
              {card.subtitle}
            </Typography>
            <div className="w-[80%] h-[5px] bg-gradient-to-r from-[#DEDEDE] to-[#ffffff]"></div>
            <Typography color="gray" className="mb-8 font-thin text-base">
              {card.description}
            </Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Box;
