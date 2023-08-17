import React from 'react';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';
import Header from './Header';


const Home = () => {
    return (
        <div className="flex text-2xl font-semibold ">
            {/* <Header/> */}
            <Leftsection/>
            <Rightsection/>
            
        </div>
    );
}

export default Home;
