import React from 'react';
import { Link } from "react-router-dom";
import images from "./images.json";
import Recommended from './Recommended';

const HeaderTopic = () => {
    return (
        <div className="w-[766.35px] mx-auto">
            <div className="flex items-center justify-between mt-[62.07px] w-[693.93px]">
                <span className="text-[17.52PX] text-[#A8A8A8] font-bold">YOUR TOPICS</span>
                <Link to="/">
                    <p className="flex items-center justify-center text-[18.26px] font-normal 
                    text-[#253655] w-[120.48px] h-[46.73px] rounded-full bg-[#E6E6E6]">Gaming</p>
                </Link>
                <Link to="/">
                    <p className="flex items-center justify-center text-[18.26px] font-normal
                     text-[#253655] w-[236.59px] h-[46.73px] rounded-full bg-[#E6E6E6]">Android Development</p>
                </Link>
                <Link to="/">
                    <p className="flex items-center justify-center text-[18.26px] font-normal
                     text-[#253655] w-[151.88px] h-[46.73px] rounded-full bg-[#E6E6E6]">Freelancing</p>
                </Link>
            </div>
            <div className="flex items-center justify-between mt-[43.08px] w-[602px]">
                {
                    images.map(({img},i) => (
                        
                        <img
                         key ={i}
                         className = "w-[78.86px] h-[78.86px]"
                         src = {`/images/${img}`}
                         alt = ""
                        />
                    ))}
            </div>
            <div>
                <Recommended/>            
            </div>
        </div>
    );
};

export default HeaderTopic;