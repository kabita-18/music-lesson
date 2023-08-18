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
    <Card className="w-full overflow-hidden bg-[#F0F0F0]">
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
          className="p-3 px-0 align-left font-medium text-base color-[#616161]"
        >
          Music Instruments
        </Typography>

        <div className="flex bg-white rounded-full sm:w-full ml-2 md:w-[250px]">
          <div className="h-8 w-8 overflow-hidden rounded-full cursor-pointer  mr-2 ">
            <img
              className="rounded-full"
              src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
              alt="user"
            />
          </div>
          <Typography className="text-black px-4  font-medium">
            Learn about
          </Typography>
        </div>

        <div>
          <BiSolidTimeFive className="inline" />
          <Typography className="inline"> Track your practice time</Typography>
        </div>

        <div>
          <AiFillStar className="inline" />
          <Typography className="inline"> Rate your favrorite</Typography>
        </div>
        <Typography className="text-black text-base mt-4  font-medium">
          About the course
        </Typography>
        <Typography color="gray" className="mt-3 ">
          Learn music notes and theory to become a skilled musician. This course
          covers everything from basic to advanced techniques, helping you play
          any instrument with confidence.
        </Typography>
      </CardBody>
    </Card>
  );
}

export default Rightsection;
