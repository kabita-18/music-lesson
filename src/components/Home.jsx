import React from 'react';
import Leftsection from './Leftsection';
import Rightsection from './Rightsection';



const Home = () => {
    return (
        <div className="flex flex-col md:flex-row  text-2xl font-semibold">    
            <Leftsection/>
            <Rightsection/>
            
        </div>
    );
}

export default Home;
