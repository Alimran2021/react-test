import React from 'react';
import { Link } from 'react-router-dom';
import TelegramBot from './TelegramBot';

const Recommended = () => {
    return (
        <>
        <div className="flex items-center justify-between flex-wrap box-border">
          <div>
            <div className="flex items-center justify-between mt-[37.24px] w-56 mb-[13.78px]">
                <Link to="/">
                <p className="text-[18.26px] font-bold text-[#253655]">Following</p>               
                </Link>
                <Link to="/">
                <p className="text-[18.26px] font-bold text-[#00A2DD]">Recommended</p>
                </Link>
            </div>
                <div className="w-[767.45px] border-b-[1.46px] mb-[37.97px]"></div>
            <div className="flex items-center justify-between w-[200px]">
                <img
                 className="w-[36.51px] h-[36-51]"
                 src="/images/amira.png" alt=""/>
                <p className="text-[18.26px] text-[#000000] font-normal">Amira Daifi</p>
                <p className="text-[18.26px] text-[#82859C] font-normal">. Jan 16</p>
            </div>
            <div>
                {/* here */}
                <div className="flex items-center justify-between">
                 <div>
                    <h3 className="font-bold text-[21.91px] text-[#253655] mt-[15.33px]">💻How I code for 8 hours without feeling tired.</h3>
                    <p className="font-normal text-[19.72px] text-[#394E79] w-[592.93px]">
                    🔴 I have coded wrong my whole life. I thought it was okay to just sit down at my desk, open my laptop, take a task from my To-Do list, and code until I felt tired. But in reality, this style of work always killed my productivity...
                    </p>
                 </div>
                 <div>
                <img
                 className="w-[122.68px] h-[122.68px] ml-[50.38px]"
                 src="/images/desk.png"
                 alt=""
                />
          </div>
                </div>
                <div className="flex items-center justify-between mt-[30.33px] w-[592.93px]">
                    
                    <div className="flex items-center justify-between w-[270px]">
                        <button>
                        <p className="flex items-center justify-center text-[18.26px] font-normal 
                    text-[#253655] w-[119.75px] h-[35.05px] rounded-full bg-[#E6E6E6]">Coding</p>
                        </button>
                        <button>
                        <p className="flex items-center justify-center text-[18.26px] font-normal 
                    text-[#253655] w-[119.75px] h-[35.05px] rounded-full bg-[#E6E6E6]">Work</p>
                        </button>
                    </div>
                    <div className="flex items-center justify-between w-[55px]">
                        <button>
                        <img className="w-[17.4px] h-[22.36px] text-[#253655]" src="/images/vact-1.png" alt=""/>
                        </button>
                        <button>
                        <img className="w-[17.4px] text-[#000000]" src="/images/vact-2.png" alt=""/>
                        </button>
                    </div>
                </div>
            </div>
          </div>

        </div>
        <div className="w-[767.45px] border-b-[1.46px] mt-[37.97px]"></div>
        <TelegramBot/>
        </>
    );
};

export default Recommended;