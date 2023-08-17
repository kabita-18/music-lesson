import { Typography } from '@material-tailwind/react';
import React from 'react';

const Header = () => {
    return (
        <div className="flex items-center">
            <Typography className="text-xl font-semibold mr-4">Music Lesson</Typography>
            <input
                type="text"
                className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter your text here"
            />
        </div>
    );
}

export default Header;
