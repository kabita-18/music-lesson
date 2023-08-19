import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import concert from "../images/concert.jpg";
import { BiSolidTimeFive } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

export function Rightsection() {
  return (
    <Card className="w-full z-0 bg-[#F0F0F0] text-[#616161]">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none flex justify-center"
      >
        <img
          src={concert}
          alt="instrument"
          className="w-[95%] h-[380px] rounded-md shadow-md border border-gray-300  m-2"
        />
      </CardHeader>
      <CardBody className="px-6">
        <Typography
          variant="h6"
          className="p-5 px-0 align-left font-medium text-base"
        >
          Music Instruments
        </Typography>

        <div className="p-2">
        <div className="flex bg-white rounded-full sm:w-full  md:w-[250px] ml-2">
          <div className="h-8 w-8 overflow-hidden rounded-full cursor-pointer self-center mb-2 md:mb-0">
            <img
              className="rounded-full"
              src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
              alt="user"
            />
          </div>
          <Typography className="px-4 font-medium text-center md:text-left">
            Learn about
          </Typography>
        </div>

        <div className="flex items-center">
          <BiSolidTimeFive className="inline text-black" />
          <Typography className="inline ml-2">
            {" "}
            Track your practice time
          </Typography>
        </div>

        <div className="flex items-center">
          <AiFillStar className="inline text-black" />
          <Typography className="inline ml-2"> Rate your favrorite</Typography>
        </div>
        <Typography className="text-base mt-4  font-medium">
          About the course
        </Typography>
        <Typography color="gray" className="mt-3 ">
          Learn music notes and theory to become a skilled musician. This course
          covers everything from basic to advanced techniques, helping you play
          any instrument with confidence.
        </Typography>
        </div>
       
      </CardBody>
    </Card>
  );
}

export default Rightsection;
