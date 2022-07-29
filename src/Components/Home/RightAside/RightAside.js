import React from 'react';
import { Link } from 'react-router-dom';

const RightAside = () => {
    return (
        <aside className="ml-[38.7px] mr-[18.99px] mt-[53.31px]">
            <div className=" relative flex items-center justify-center w-[327.27px] h-[64.26px] border-[1.46px] border-[#D8D8D8] rounded-full">
                <img
                 className="absolute left-[20.61px] text-[#253655]"
                 src="/images/search.png"
                 alt=""
                />
                {/* <span className="font-normal text-[17.52px] text-[#82859C] absolute left-[60.61px]">Search...</span> */}
                <input
                 className="w-[210px] h-8 focus:outline-none" placeholder="Search" type="text" name="search"
                />
            </div> 
            <div className="flex items-center justify-between w-[240px] mt-[40.16px]">
                <p className="w-[10.95px] h-[10.95px] rounded-full bg-[#2EAD4B]"></p>
                <p className="font-bold text-[21.91px] text-[#253655]">What Trending Today</p>
            </div> 
            <div className="mt-[40.16px]">
                <div className="flex items-center justify-between w-[126px] text-[14.6px] text-[#253655]">
                    <img src="/images/image-9.png" alt=""/>
                    <span className="text-[14px] text-[#253655]">Scott Galloway</span>
                </div>
                <p className="font-bold text-[18.26px] text-[#253655] w-[291px] mt-[9.49px]">The Attention Economy is Making Us Stupid</p>
                <div className="flex items-center justify-between w-[159px] text-[14.6px] text-[#253655] mt-[16.79px]">
                    <img src="/images/image-10.png" alt=""/>
                    <span className="text-[14px] text-[#253655]">Meredith Cummings</span>
                </div>
                <p className="font-bold text-[18.26px] text-[#253655] w-[291px] mt-[9.49px]">I Raised My Child in a Shopping Mall</p>
                <div className="flex items-center justify-between w-[115px] text-[14.6px] text-[#253655] mt-[16.79px]">
                    <img src="/images/image-11.png" alt=""/>
                    <span className="text-[14px] text-[#253655]">Ella Alderson</span>
                </div>
                <p className="font-bold text-[18.26px] text-[#253655] w-[328px] mt-[9.49px]">We’re Uncovering One of AI’s Deepest Mysteries</p>
            </div> 
            <div className="mt-[30.48px] mb-[26.29px] border-b-[1.46px] border-[#E6E6E6]"></div> 
            <div>
                <h3 className="font-bold text-[21.91px] text-[#253655]">Recommended topics</h3>
                <div className="grid grid-cols-2 gap-2 max-w-[327.27px] mt-[32.42px]">
                    <Link to="/">
                        <p className="flex items-center justify-center w-[120.48px] 
                        h-[46.73px] bg-[#E6E6E6] text-[18.26px] text-[#253655] rounded-full">Cosmic</p>
                    </Link>
                    <Link to="/">
                        <p className="flex items-center justify-center w-[160.2px] 
                        h-[46.73px] bg-[#E6E6E6] text-[17.26px] text-[#253655] rounded-full">Flutter App Dev</p>
                    </Link>
                    <Link to="/">
                        <p className="flex items-center justify-center w-[146.77px] 
                        h-[46.73px] bg-[#E6E6E6] text-[18.26px] text-[#253655] rounded-full">IOS App Dev</p>
                    </Link>
                    <Link to="/">
                        <p className="flex items-center justify-center w-[105.15px] 
                        h-[46.73px] bg-[#E6E6E6] text-[18.26px] text-[#253655] rounded-full">Politics</p>
                    </Link>
                    <Link to="/">
                        <p className="flex items-center justify-center w-[116.83px] 
                        h-[46.73px] bg-[#E6E6E6] text-[18.26px] text-[#253655] rounded-full">Religion</p>
                    </Link>
                    <Link to="/">
                        <p className="flex items-center justify-center w-[116.83px] 
                        h-[46.73px] bg-[#E6E6E6] text-[18.26px] text-[#253655] rounded-full">Finance</p>
                    </Link>
                </div>
            </div>  
        </aside>
    );
};

export default RightAside;