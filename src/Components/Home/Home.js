import React from 'react';
import HeaderTopic from './HeaderTopic/HeaderTopic';
import RightAside from './RightAside/RightAside';
import SideMenuBar from './SideMenuBar/SideMenuBar';

const Home = () => {
    return (
        <div className="max-w-[1400px] max-h-full flex">
            <div className="border-r border-[#E6E6E6]">
                <SideMenuBar/>
            </div>
            <div className="w-[882.82px] border-r border-[#E6E6E6]">
                <HeaderTopic/>
            </div>
            <div className="w-[390.66px]">
                <RightAside/>
            </div>
        </div>
    );
};

export default Home;