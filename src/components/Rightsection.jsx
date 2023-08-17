import {
    Card,
    CardHeader,
    CardBody,
    Typography,    
  } from "@material-tailwind/react";
  import instrument from "../images/instrument.png"
  import {BiSolidTimeFive} from "react-icons/bi"
  import {AiFillStar} from "react-icons/ai"
   
  export function Rightsection() {
    return (
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img
            src={instrument}
            alt="instrument"
            className="w-full rounded-md shadow-md border border-gray-300  m-0"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="p-3">
            Music Instruments
          </Typography>
          
          <div className="flex bg-white rounded-full p-2 ">

            <div className="h-8 w-8 overflow-hidden rounded-full md:ml-4 cursor-pointer  mr-2 ">
            <img className="rounded-full"
                src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg"
                alt="user"
            />
            </div>
            <Typography className="text-black px-4  font-medium">
            Learn about
            </Typography>
            </div>

            <span>
                <BiSolidTimeFive/>
                <Typography> Track your practice time</Typography>
            </span>

            <span>
                <AiFillStar/>
                <Typography> Rate your favrorite</Typography>
            </span>
    
          <Typography  color="gray" className="mt-3 ">
            Learn music notes and theory to become a skilled musician. This course covers everything from basic to advanced techniques, helping you play any instrument with confidence.
          </Typography>
        </CardBody>
  
      </Card>
    );
  }

  export default Rightsection;