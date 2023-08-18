import React from 'react';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Header from './Header';


const Home = () => {
    return (
        <div className="flex text-2xl h-[100%] font-semibold ">
            {/* <Header/> */}
            <Leftsection/>
            <Rightsection/>
            
        </div>
    );
}

export default Home;
