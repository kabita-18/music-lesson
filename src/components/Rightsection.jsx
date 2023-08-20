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
    <Card className="w-full z-0 bg-[#F0F0F0] text-[#616161] h-[700px] pt-3">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none flex justify-center"
      >
        <img
          src={concert}
          alt="instrument"
          className="w-[90%] h-[380px] rounded-md shadow-md border border-gray-300  m-2"
        />
      </CardHeader>
      <CardBody className="px-6">
        <div className="p-2">
          <Typography variant="h6" className="p-3  align-left text-lg">
            Music Instruments
          </Typography>

          <div className={`flex w-[160px] bg-white rounded-full p-1  `}>
            <div
              className={`h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer  mr-2 `}
            >
              <img
                className="rounded-full"
                src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
                alt="user"
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`text-gray   whitespace-nowrap text-base `}>
                Learn about
              </h1>
            </div>
          </div>

          <div className="flex items-center">
            <BiSolidTimeFive className="inline text-black " />
            <Typography className="inline ml-2 p-1">
              {" "}
              Track your practice time
            </Typography>
          </div>

          <div className="flex items-center">
            <AiFillStar className="inline text-black" />
            <Typography className="inline ml-2 p-1">
              {" "}
              Rate your favrorite
            </Typography>
          </div>
          <Typography className="text-base mt-4  font-medium">
            About the course
          </Typography>
          <Typography color="gray" className="mt-3 ">
            Learn music notes and theory to become a skilled musician. This
            course covers everything from basic to advanced techniques, helping
            you play any instrument with confidence.
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

export default Rightsection;
