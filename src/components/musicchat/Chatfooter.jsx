import React from 'react';
import { PiBookOpenTextThin } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';
import { Typography } from '@material-tailwind/react';

const IconBlock = ({ icon, text }) => {
  return (
    <div className="flex items-center bg-white rounded-full sm:w-full md:w-[250px] mt-2 ml-2">
      <div className="h-8 w-8 overflow-hidden rounded-full cursor-pointer mr-2 bg-black text-white text-center flex items-center justify-center">
        {icon}
      </div>
      <Typography className="text-black px-4 font-medium">
        {text}
      </Typography>
    </div>
  );
};

const Chatfooter = () => {
  return (
    <div className='px-4'>
      <IconBlock icon={<PiBookOpenTextThin />} text="Important Practises" />
      <IconBlock icon={<AiOutlineHome />} text="Assignment" />
      <IconBlock icon={<SlNote />} text="Music Notes" />
    </div>
  );
};

export default Chatfooter;
